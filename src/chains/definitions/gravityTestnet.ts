import { defineChain } from '../../utils/chain/defineChain.js'

export const gravityTestnet = /*#__PURE__*/ defineChain({
  id: 13505,
  name: 'Gravity Alpha Testnet',
  nativeCurrency: { name: 'G', symbol: 'G', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc-sepolia.gravity.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Gravity Explorer',
      url: 'https://explorer-sepolia.gravity.xyz',
    },
  },
  testnet: true,
})
