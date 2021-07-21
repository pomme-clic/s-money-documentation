/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path')

module.exports = {
  title: 'Xpollens API docs',
  tagline: 'Baseline',
  url: 'https://docusaurus-lansolo99-test.netlify.app',
  baseUrl: '/',
  noIndex: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xpollens',
  projectName: 's-money-documentation',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Xpollens API docs',
        src: 'img/ui/logo_xpollens.svg',
        srcDark: 'img/ui/logo_xpollens_dark.svg',
        href: '/',
      },
      items: [
        {
          type: 'doc',
          docId: 'docs/getting-started',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'api/introduction',
          label: 'API references',
          position: 'left',
        },
        {
          href: 'https://www.xpollens.com',
          label: 'xpollens.com',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    path.resolve(__dirname, './plugins/customDocument'),
    path.resolve(__dirname, './plugins/docusaurus-tailwindcss-loader'),
    // [
    //   require.resolve('@cmfcmf/docusaurus-search-local'),
    //   {
    //     docsRouteBasePath: '/',
    //     indexBlog: false,
    //     indexPages: false,
    //   },
    // ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1100,
        min: 640,
        steps: 4,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/lansolo99/s-money/edit/main/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
