/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

//const HDWalletProvider = require('truffle-hdwallet-provider');
                  /* 0x4BC356892C6375332c800ce76E25A06Df50fA922 */
//const infuraKey = "5f59240f2ecefc221a12692cf40ee5bc9178ae88b53d2d6b7baad13732112f22";
//
//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();

// require('dotenv').config();
// const Web3 = require("web3");
// const web3 = new Web3();
const WalletProvider = require("truffle-hdwallet-provider");
// const Wallet = require('ethereumjs-wallet');

var rinkebyPrivateKeys = ["5f59240f2ecefc221a12692cf40ee5bc9178ae88b53d2d6b7baad13732112f22"];
var krwlocalPrivateKeys = ["9608CB0B9A1BD35492EDD12ED504B93A3968E19155318C9348436975B77DA6FF"];
//, "hex");
//var rinkebyWallet = Wallet.fromPrivateKey(rinkebyPrivateKey);
var rinkebyProvider = new WalletProvider(rinkebyPrivateKeys, "https://rinkeby.infura.io/");
var ropstenProvider = new WalletProvider(rinkebyPrivateKeys, "https://ropsten.infura.io/v3/");
var ethmainProvider = new WalletProvider(rinkebyPrivateKeys, "https://api.myetherwallet.com/eth");
var krwlocalProvider = new WalletProvider(krwlocalPrivateKeys, "http://127.0.0.1:8545/");
module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      //from: "0x0000000000000000000000000000000000000001",
      provider: krwlocalProvider
    },
    krwcoin: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 4600000,
      gasPrice: 20000000000,
      //from: "0x0000000000000000000000000000000000000001",
      provider: krwlocalProvider
    },
    rinkeby: {
      provider: rinkebyProvider,
      gas: 4600000,
      gasPrice: 20000000000,
      network_id: "4",
    },
    ropsten: {
      provider: ropstenProvider,
      gas: 8500000,
      gasPrice: 20000000000,
      network_id: "3",
    },
    mainnet: {
      provider: ethmainProvider,
      gas: 8500000,
      gasPrice: 20000000000,
      network_id: "1",
    }

    // Another network with more advanced options...
    // advanced: {
      // port: 8777,             // Custom port
      // network_id: 1342,       // Custom network
      // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send txs from (default: accounts[0])
      // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
      // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
      // network_id: 3,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

    // Useful for private networks
    // private: {
      // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
      // network_id: 2111,   // This network is yours, in the cloud.
      // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: true,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      
    }
  }
}
