// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const tagline = 'Humanizing UI Automation';

// This is a hacky way to get GTM working //////////
// See also the 'scripts' tag in config ////////////
var headScript = '/scripts/googleTagManager.js';
var utm2CookieScript = 'https://askui-public.s3.eu-central-1.amazonaws.com/assets/set-analytics-cookies-from-query-parameters.js';
var segmentExternalLinkTracking = '/scripts/segmentExternalLinks.js';
const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  headScript = '/scripts/isNotProd.js';
  utm2CookieScript = '/scripts/isNotProd.js';
  segmentExternalLinkTracking = '/scripts/isNotProd.js';
}

////////////////////////////////////////////////////

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `askui - ${tagline}`,
  tagline,
  url: 'https://docs.askui.com',
  baseUrl: process.env.DOCS_BASE_URL || '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/askui_icon_positive_rgb-150x150.png',
  organizationName: 'askui',
  trailingSlash: false,
  plugins: [
    ['docusaurus-plugin-sass', {}],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  projectName: 'askui', // Usually your repo name.

  scripts: [
    {src: `${headScript}`},
    {src: `${utm2CookieScript}`, async: true,}
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/askui/askui/tree/main/docs/${versionDocsDirPath}/${docPath}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'askui logo',
          src: 'img/askui_logo-horizontal_positive_rgb.svg',
          srcDark: 'img/askui_logo-horizontal_negative_rgb.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'general/Getting Started/start',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'api/API/table-of-contents',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'search',
            position: 'left',
          },
          {
            href: 'https://github.com/askui/askui',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/EgHmgmPUhT',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/askyourui',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ask_ui',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC2LZq-dfxwAgPu_wMMIl7PA',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Contact',
                href: 'mailto:info@askui.com',
              },
              {
                label: 'Data Privacy',
                href: 'https://www.askui.com/data-privacy',
              },
              {
                label: 'Imprint',
                href: 'https://www.askui.com/imprint',
              },
              {
                html: `
                    <!-- Google Tag Manager (noscript) -->
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MPZ8G56"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                    <!-- End Google Tag Manager (noscript) -->
                    <script src="${segmentExternalLinkTracking}" async></script>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} askui GmbH`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      },
    ],
  ]
};

module.exports = config;
