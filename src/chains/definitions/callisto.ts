import { defineChain } from '../../utils/chain/defineChain.js'

export const callisto = /*#__PURE__*/ defineChain({
  id: 820,
  name: 'Callisto Mainnet',
  nativeCurrency: { name: 'CLO', symbol: 'CLO', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.callistodao.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Callisto Explorer',
      url: 'https://explorer.callistodao.org',
    },
  },
  testnet: false,
})
