import { defineChain } from '../../utils/chain/defineChain.js'

export const primus = /*#__PURE__*/ defineChain({
  id: 78,
  name: 'PrimusChain Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'PETH',
    symbol: 'PETH',
  },
  rpcUrls: {
    default: { 
      http: ['https://ethnode.primusmoney.com/mainnet'],
    },
  },
  blockExplorers: {
    default: {
      name: 'PrimusChain Explorer',
      url: 'https://primusmoney.com',
    },
  },
  testnet: false,
})
