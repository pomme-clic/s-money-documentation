/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path')

module.exports = {
  title: 'Xpollens API docs',
  url: 'https://docusaurus-lansolo99-test.netlify.app',
  baseUrl: '/',
  noIndex: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xpollens',
  projectName: 's-money-documentation',
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
          docId: 'api/api1',
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
    customFields: {
      footerCustom: {},
      baseAPIURL: '',
    },
    baseAPIUrl: 'https://ic-api.s-money.net/swagger/docs',
    // baseAPIUrl: 'https://petstore.swagger.io',
    footerCustom: {
      socialIcons: [
        {
          title: 'linkedin',
          href: 'https://fr.linkedin.com/showcase/xpollens',
        },
        {
          title: 'twitter',
          href: 'https://twitter.com/xpollens',
        },
        {
          title: 'test',
          href: 'https://twitter.com/xpollens',
        },
      ],
      tagline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh.',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Our solution',
          items: [
            {
              label: 'Get started',
              href: '/',
            },
            {
              label: 'SEPA transactions',
              href: '/',
            },
            {
              label: 'Credit card',
              href: '/',
            },
            {
              label: 'Payment',
              href: '/',
            },
            {
              label: 'KYC',
              href: '/',
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
      copyright: `© ${new Date().getFullYear()} Xpollens.`,
    },
  },
  plugins: [
    path.resolve(__dirname, './plugins/customDocument'),
    path.resolve(__dirname, './plugins/docusaurus-tailwindcss-loader'),
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 2000,
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
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
