import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebar as you want.
 */
const sidebars = {
  tutorialSidebar: [
    'Disclaimer',  
    {
      type: 'category',
      label: 'Protocol Overview',
      items: [
        'Get Started/Readme',
        'Get Started/Roadmap',
        'Get Started/Whitepaper',
        'updates', 
      ],
    },
    {
      type: 'category',
      label: 'Protocol Token',
      items: [
        'tokenomics/readme',
        'tokenomics/distribution-and-vesting',
        'tokenomics/initial-stake-pool-offering',
        
      ],
    },
    {
      type: 'category',
      label: 'Protocol Revenue Share Model',
      items: [
        'Beta Incentive Rewards',
        'revenue-share-model', 
        'tokenomics/usdcrash-staking',
        'Trading Rewards', 

      ],
    },
    {
      type: 'category',
      label: 'Instructions',
      items: [
        'Verify',
        'Trade',
      ],
    },

  ],
};

module.exports = sidebars;


