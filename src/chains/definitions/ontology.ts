import { defineChain } from '../../utils/chain/defineChain.js'

export const ontology = /*#__PURE__*/ defineChain({
  id: 58,
  name: 'Ontology',
  nativeCurrency: {
    decimals: 9,
    name: 'ONG',
    symbol: 'ONG',
  },
  rpcUrls: {
    default: { http: ['https://dappnode3.ont.io:10339'] },
  },
  blockExplorers: {
    default: {
      name: 'Ontology Blockchain Explorer',
      url: 'https://explorer.ont.io',
    },
  },
})
