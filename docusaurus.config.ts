import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Official Documentation for Crashr',
  tagline: 'An advanced digital asset trading platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://v2.docs.crashr.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Crashr-io', // Usually your GitHub org/user name.
  projectName: 'docs.crashr.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Crashr',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Overview',
        },
        {
          href: 'https://docs.crashr.io/',
          label: 'Whitepaper',
          position: 'left',
        },
        {
          href: 'https://crashr.io/',
          label: 'dApp Platform,
          position: 'right',
        },
        {
          href: 'https://beta.crashr.io/',
          label: 'v.1.0',
          position: 'right',
        },
        {
          href: 'https://linktr.ee/crashr',
          label: 'Socials',
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
            label: 'Get Started',
            to: '/docs/Get Started',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/crashr_io',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/Crashr',
            },
             {
              label: 'Telegram',
              href: 'https://t.me/Crashr_io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/@Crashr',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Crashr-io/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/Crashr/?rdt=54337',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
