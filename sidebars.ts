import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'docs/Get Started', // Replace with the actual file path within the docs directory
        // Add more items here as necessary
      ],
    },
   {
      type: 'category',
      label: '$Crashr Tokenomics',
      items: [
        'docs/tokenomics', // Replace with the actual file path within the docs directory
        // Add more items here as necessary
      ],
    },
   {
      type: 'doc',
      label: 'Points',
      items: [
        'docs/points.md', // Replace with the actual file path within the docs directory
        // Add more items here as necessary
      ],
    },
    {
      type: 'doc',
      label: 'Revenue Share Model',
      items: [
        'docs/revenue-share-model.md', // Replace with the actual file path within the docs directory
        // Add more items here as necessary
      ],
    },
  ],
};

module.exports = sidebars;
