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
        'Get Started', // Assuming the file is named Get Started.md in the docs directory
        // Add more items here as necessary
      ],
    },
    {
      type: 'category',
      label: '$CRASH Tokenomics',
      items: [
        'tokenomics', // Assuming the file is named tokenomics.md in the docs directory
        // Add more items here as necessary
      ],
    },
    'points', // Assuming the file is named points.md in the docs directory
    'revenue-share-model', // Assuming the file is named revenue-share-model.md in the docs directory
  ],
};

module.exports = sidebars;

