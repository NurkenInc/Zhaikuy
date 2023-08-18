// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line
const lightCodeTheme = require('prism-react-renderer/themes/github');
// eslint-disable-next-line
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zhaikuy',
  tagline: 'State management with ease',
  favicon: 'img/galaxy.png',

  // Set the production url of your site here
  url: 'https://zhaikuy.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NurkenInc', // Usually your GitHub org/user name.
  projectName: 'zkaikuy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [],
  stylesheets: ['css/fonts.css'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // eslint-disable-next-line
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NurkenInc/Zhaikuy',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: 'v2.x'
            }
          }
        },
        theme: {
          // eslint-disable-next-line
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Zhaikuy',
        logo: {
          alt: 'Zkaikuy Logo',
          src: 'img/galaxy.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/NurkenInc/Zhaikuy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/getting-started/example',
              },
            ],
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
                href: 'https://github.com/NurkenInc/Zhaikuy',
              },
            ],
          },
        ],
        logo: {
          src: 'img/galaxy.png',
          alt: 'footer logo',
          height: 50,
          width: 'auto',
        },
        copyright: `Copyright © 2023-${new Date().getFullYear()} zhaikuy.`,
      },
      prism: {
        // eslint-disable-next-line
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
    }),
};

// eslint-disable-next-line
module.exports = config;
