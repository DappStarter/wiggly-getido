require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name recipe noise minor good kangaroo army gasp'; 
let testAccounts = [
"0xfe65956d3704db782ac8e35b41c3512026c98fcb56d49664eb49280fc1a2e17d",
"0xdd198bf4cf554f5a17e5dada10d95cae874a97bc69361ec1ead10a491139c070",
"0x6a2b4077aa38f1dcd6117317072291e347eb1789223942411bcfcf9205c44d77",
"0x08094e76cccb5bcbeeba2aad7352bb46bf7a9984d092c8b7843407255eeee487",
"0x506d640d4a8324d1416455aa7e756f01e1e4078a0ebb6ab18278a6edbbb696c5",
"0xde32b1fd287f7406bfcd1abcdb1ccc54724798449272e0c5514aa7f54dde811e",
"0x543fa0c51dde28104ecf1d8e79bc32dc8896c7d5e0e2b243e6ed046951dd3a1b",
"0xe338633fe7283e08381b94d528faf75e5a1842ffe57384a27e84068a66b19c2e",
"0xa741e94eaa387c89427ffb69cb70f394dd67b777d63451fc5ff03dd61e92b685",
"0x101f3705a871060b5e51e714c319095d973c01753cdddfbd4ece5590160de0d0"
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
