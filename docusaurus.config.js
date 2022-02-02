/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path')

module.exports = {
  title: 'Xpollens API docs',
  url: 'https://docs.xpollens.com/',
  baseUrl: '/',
  noIndex: false,
  wrapPagesHTML: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
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
          docId: 'api/Core',
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
    prodDomains: [
      ['s-money-documentation-site.netlify.app', 'docs.xpollens.com'],
    ],
    baseAPIUrls: {
      sandbox: 'https://ic-api.s-money.net/swagger/docs',
      production: 'https://sb-api.xpollens.com/swagger/docs',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Our solution',
          items: [
            {
              label: 'Get started',
              href: '/docs/introduction',
            },
            {
              label: 'SEPA transactions',
              href: '/docs/payment/IP',
            },
            {
              label: 'Credit card',
              href: '/docs/cards/issuing',
            },
            {
              label: 'Payment',
              href: '/docs/payment/beneficiaries',
            },
            {
              label: 'KYC',
              href: 'docs/kyc/retail-customer',
            },
          ],
        },
        {
          title: 'Our company',
          items: [
            {
              label: 'About Us',
              href: 'https://www.xpollens.com/en/enterprise/about-us/',
            },
            {
              label: 'Careers',
              href: 'https://www.xpollens.com/en/enterprise/careers/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms and policies',
              href: 'https://www.xpollens.com/en/legal-statement/',
            },
            {
              label: 'Cookies policies',
              href: 'https://www.xpollens.com/en/cookie-policy/',
            },
            {
              label: 'Data protection',
              href: 'https://www.xpollens.com/en/data-protection/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Xpollens.`,
    },
    footerCustom: {
      socialIcons: [
        {
          title: 'linkedin',
          href: 'https://www.linkedin.com/company/xpollens',
        },
        {
          title: 'twitter',
          href: 'https://twitter.com/xpollens',
        },
      ],
      tagline: 'Build tailor-made & embedded payment for your business.',
    },
    customFields: {
      footerCustom: {},
      baseAPIURL: '',
    },
    gtag: {
      trackingID: 'G-1WKNGB5DKZ',
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
    // '@docusaurus/plugin-google-analytics',
    [
      path.resolve(__dirname, './plugins/@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: ['/docs/', '/api'],
        docsDir: ['docs/docs', 'docs/api'],
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
