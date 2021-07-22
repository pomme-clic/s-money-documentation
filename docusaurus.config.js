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
          docId: 'docs/home',
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
          title: 'Our solution',
          items: [
            {
              label: 'Get started',
              href: '/docs',
            },
            {
              label: 'SEPA transactions',
              href: '/docs',
            },
            {
              label: 'Credit card',
              href: '/docs',
            },
            {
              label: 'Payment',
              href: '/docs',
            },
            {
              label: 'KYC',
              href: '/docs',
            },
          ],
        },
        {
          title: 'Our company',
          items: [
            {
              label: 'Guides',
              href: 'https://xpollens.com',
            },
            {
              label: 'Tutorials',
              href: 'https://xpollens.com',
            },
            {
              label: 'Engineering',
              href: 'https://xpollens.com',
            },
            {
              label: 'Engineering',
              href: 'https://xpollens.com',
            },
            {
              label: 'Pricing',
              href: 'https://xpollens.com',
            },
            {
              label: 'Enterprise',
              href: 'https://xpollens.com',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms and policies',
              href: 'https://xpollens.com',
            },
            {
              label: 'Cookies policies',
              href: 'https://xpollens.com',
            },
            {
              label: 'Copyrights',
              href: 'https://xpollens.com',
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
