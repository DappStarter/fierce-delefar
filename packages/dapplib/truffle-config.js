require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rate noble million grid argue metal genre'; 
let testAccounts = [
"0x813727f3686b9c8843b939666de0643061ebb50086baee27fec9933edf8fa01c",
"0xb66d78b4a443790f34f201396779f208384fedc085a8bef500f6b380b10fcd3a",
"0x8193660861c7ec1a43d6df6a543ee48c3a78bcf6c8e292c0609cebf80fa3d69c",
"0xe624caa31ea930349336648eb9ceb8ed80114b159ae1d072ebd91f04a47f22b4",
"0x32ec33f6c9a18ebb7997d2ddcdd9c2408ef29f09bab34d45eed8c60e91ea01a7",
"0xd63ecf2fc520692bfe09cc7407e33ff200b325038256b427330caa0be1537344",
"0x5dcdbffd55abc7e5b8a6a2932cb3814380ca29b40fd208d81b1b41593c511135",
"0x83a24bc0524e9cf9cb4120229435cff448462eb9afd018b9b5d9035ffeb253d6",
"0x8a1827761616f1958bc9486a9ebbeb5538c2bfa1b5ef174212038684aaaf56c7",
"0x3b6b34f5041aef8646af56dffb1f5a7db11914a44470b6a46886f5a605216ce9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
