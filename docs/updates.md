# Development Updates

![Updates](/img/Updates.png)

## Update v.0.1.4

### Features
- **WEB** 
  - Chang Hardfork/Conway Era Compatibility
  - Integrate cursor-based pagination for API and Frontend
  - Materialized View toggle configuration
  - Created index on Verified NFTs Table (Materialized View)
  - Integrate cursor-based pagination to Collection Activity
  - Integrate Metamask Compatibility
  - Integrate Carousel Updates

### Fixes
- **WEB** 
  - Encoding issue about token names from Token Metadata Registry
  - Fixed Recent/Top Trades proper update logic on new data
  - Fixed Token cursor pagination (subjects not supported)
  - Fixed Explore page missing token assets
  - Fixed Incorrect Collection Volume Stats and Token Prices
  - Fixed missing tokens on Trade Container
  - Fixed Trade Container Pagination in Collection Page

### Chore
  - Version bump for library dependencies (Pallas.NET and Cardano.Sync)
  - Exclude Spectrum Price Reducer
  - Simplified Listing Query by cursor filtering

## Update v.0.1.3

### Features
- **WEB** 
  - Created FAQ page (#608)
  - Created About page (#600)
  - Added links and implemented changes on footer (#649)
  - Added new images and content to carousel on the homepage (#648)
  - Updated the About page cards and links (#651)

- **SYNC** 
  - Implemented SundaeSwap price indexing (#646)

### Fixes
- **WEB** 
  - Fixed CI build errors (#650)
  - Resolved SQL syntax error when user searches for more than one word (#635)
  - Improved the listing open graph meta tags code (#389)
  - Added the terms and conditions and privacy policy links to wallet picker dialog (#653)

### Chore
- Updated FREN carousel link (#652)
- Temporarily disabled the featured section in about page (#662)

## Update v.0.1.2 

### Features
- **WEB** 
  - Added auto-reconnect feature when the page cannot reconnect to the server (#555)
  - Added privacy policy page (#598)
  - Created terms and conditions page (#599)
  - Added a placeholder image when collection image is not found on top collections’ home page (#626)

- **SYNC** 
  - Added sundae swap datums for token price reducer (#631)

### Fixes
- **WEB** 
  - Added refresh data logic on trade form (#586)
  - Added proper namespace of Lovelace on Services (#632)
  - Improved the tooltip on the trade and fixed the tooltip on asset’s picker dialog (#611)
  - Utilized the metadata name utility for NFTs in all pages (#534)
  - Improved the tabs on collection page mobile responsiveness (#613)
  - Refined the spacing of trades on user profile page (#570)
  - Applied padding space on "Learn More" button for smaller screens (#471)

### Chore
- Removed unused tags on terms and conditions (#629)

## Update v.0.1.1 

### Features
- **WEB** 
  - Added a new button animation for connecting the wallet (#549).
  - Changed the text color of price stats (highest, lowest, and floor price) to gray on the token details page (#541).
  - Added summary dialog when user clicks trade on the listing page (#480).

- **API** 
  - Added Cloudflare stats endpoint (#447).

### Fixes
- **WEB** 
  - Resolved infinite loading in the trade dialog (#579).
  - Updated the "You Receive" section in the edit asset dialog to exclude balance display (#552).
  - Prevented the header from reloading when clicking other links (#553).
  - Modified asset links in the Trades Section on the Profile page to not open in a new tab (#544).
  - Displayed an appropriate message when a transaction is cancelled (#591).
  - Centered icons for mobile responsiveness in the footer (#543).
  - Added "Waitlist" link to the footer (#479).
  - Replaced carousel image (#485).
  - Removed icon inside the Advance button in the Trade Form (#501).
  - Made pagination visible even when the page is loading (#522).
  - Removed bottom padding in the connect wallet dialog title (#487).
  - Added transaction explorer navigation when listing status is clicked on the listing page (#531).
  - Removed y-axis padding in the asset picker dialog for responsiveness (#486).
  - Adjusted page height on the token details page (#503).
  - Improved responsiveness for marketplace stats section on the home page (#504).
  - Removed token checkmark and dollar sign in search bar results (#537).
  - Enhanced responsive design for the asset picker dialog search bar (#575).

- **API** 
  - Corrected asset tagging in listings by address (#577).

### Chore
- **WEB** 
  - Removed unused variables and methods on the collection page (#571).

## Update v.0.1.0 

### Features
- **WEB** 
  - Display last traded price, highest price, lowest price, and floor price on the token details page (#457)
  - Add auto-fill functionality for maximum token amount when balance is clicked in the trade dialog (#433)
  - Implement clickable navigation for listing and collection containers on the home page (#444)
  - Enable navigation to the collection page when the NFT collection name is clicked (#429)
  - Add navigation when the collection name is clicked on the collection page and add an owner profile link from token details (#429, #474)
  - Implement tooltip for the royalty icon on collections (#425)
  - Add token animations and editable asset amounts on trade page (#491)

- **LANDING-PAGE**  
  - Add hamburger button and tokenomics and white paper navigation links in the header (#7)
  - Add "Open Crashr Beta" button (#2)

- **API** 
  - Create stats endpoint to show the summation of volumes, trades, daily trades, and wallets (#311)
  - Integrate marketplace stats endpoint on the home page (#458)

### Fixes
- **WEB**  
  - Update Open Graph token name to use metadata name on the token details page (#462)
  - Adjust spacing between content and header/footer on the explore page (#451)
  - Change number of decimal digits on wallet balance from 6 to 2 (#441)
  - Add spacing between search bar and search results container (#439)
  - Remove fake price change in profile tokens (#446)
  - Add padding at the bottom of the asset picker dialog (#431)
  - Update profile page when the user switches wallets (#435)
  - Correct decimal points for tokens on the listing page (#449)
  - Proper asset token name format in listing; removed checkmarks for ADA and replaced name with Cardano (#427)
  - Convert MudImage components to div and set asset images as background (#461, #438)
  - Improve the size of tokens in the trade dialog (#45)
  - Use token decimals to humanize value in TradeStatsCard (#478)
  - Adjust spacing between content and header/footer on explore page (#451)
  - Add 5px border radius to trade cards on top collections (#538)

- **LANDING-PAGE** 
  - Fix open Crashr button flicker in the header (#6)
- **WEB** 
  - Removed unused tags on terms and conditions (#629)
