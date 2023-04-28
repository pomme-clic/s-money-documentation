/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useActiveDocContext, useLatestVersion } from '@docusaurus/plugin-content-docs/client';
import { uniq, useDocsPreferredVersion } from '@docusaurus/theme-common';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import clsx from 'clsx';
import React from 'react';

function getDocInVersions(versions, docId) {
  // vanilla-js flatten, TODO replace soon by ES flat() / flatMap()
  const allDocs = [].concat(...versions.map((version) => version.docs));
  const doc = allDocs.find((versionDoc) => versionDoc.id === docId);

  if (!doc) {
    const docIds = allDocs.map((versionDoc) => versionDoc.id).join('\n- ');
    throw new Error(`DocNavbarItem: couldn't find any doc with id "${docId}" in version${versions.length ? 's' : ''
      } ${versions.map((version) => version.name).join(', ')}".
Available doc ids are:\n- ${docIds}`);
  }

  return doc;
}

export default function DocNavbarItem({
  docId,
  activeSidebarClassName,
  label: staticLabel,
  docsPluginId,
  ...props
}) {
  const { activeVersion, activeDoc } = useActiveDocContext(docsPluginId);
  const { preferredVersion } = useDocsPreferredVersion(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId); // Versions used to look for the doc to link to, ordered + no duplicate

  const versions = uniq(
    [activeVersion, preferredVersion, latestVersion].filter(Boolean),
  );
  const doc = getDocInVersions(versions, docId);
  return (
    <DefaultNavbarItem
      exact
      {...props}
      className={clsx(props.className, {
        [activeSidebarClassName]:
          activeDoc && activeDoc.sidebar === doc.sidebar,
      })}
      label={staticLabel ?? doc.id}
      to={doc.path}
    />
  );
}
