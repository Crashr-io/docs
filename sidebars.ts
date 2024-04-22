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
    'Get Started/Disclaimer',  
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'Get Started/Readme',
        'Get Started/Roadmap',
        'Get Started/Whitepaper',
        
      ],
    },
    {
      type: 'category',
      label: '$CRASH Tokenomics',
      items: [
        'tokenomics/readme',
        'tokenomics/distribution-and-vesting',
        'tokenomics/initial-stake-pool-offering',
        'tokenomics/usdcrash-staking',
        
      ],
    },
    'points',  
    'revenue-share-model',  
  ],
};

module.exports = sidebars;


