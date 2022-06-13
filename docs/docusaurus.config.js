// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const tagline = 'Humanizing UI Automation';

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
  plugins: ['docusaurus-plugin-sass'],
  projectName: 'askui', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://gitlab.com/vqa4gui/mvp/documentation',
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
            docId: 'general/Introduction/why-askui',
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
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
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
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/askui/shared_invite/zt-z2yu0seo-coQPdwBsV5prJsjbb8yqvA',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/EgHmgmPUhT',
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
};

module.exports = config;
