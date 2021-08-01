"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanDocuments = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const util_1 = tslib_1.__importDefault(require("util"));
const parse_1 = require("./parse");
const debug_1 = require("./debug");
const readFileAsync = util_1.default.promisify(fs_1.default.readFile);
let nextDocId = 0;
const getNextDocId = () => {
    return (nextDocId += 1);
};
function scanDocuments(DocInfoWithFilePathList) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const titleDocuments = [];
        const headingDocuments = [];
        const contentDocuments = [];
        const allDocuments = [titleDocuments, headingDocuments, contentDocuments];
        yield Promise.all(DocInfoWithFilePathList.map(({ filePath, url, type }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            debug_1.debugVerbose(`parsing %s file %o of %o`, type, path_1.default.relative(process.cwd(), filePath), url);
            const html = yield readFileAsync(filePath, { encoding: "utf8" });
            const { pageTitle, sections, breadcrumb } = parse_1.parse(html, type, url);
            const titleId = getNextDocId();
            titleDocuments.push({
                i: titleId,
                t: pageTitle,
                u: url,
                b: breadcrumb,
            });
            for (const section of sections) {
                if (section.title !== pageTitle) {
                    headingDocuments.push({
                        i: getNextDocId(),
                        t: section.title,
                        u: url,
                        h: section.hash,
                        p: titleId,
                    });
                }
                if (section.content) {
                    contentDocuments.push({
                        i: getNextDocId(),
                        t: section.content,
                        s: section.title || pageTitle,
                        u: url,
                        h: section.hash,
                        p: titleId,
                    });
                }
            }
        })));
        return allDocuments;
    });
}
exports.scanDocuments = scanDocuments;
