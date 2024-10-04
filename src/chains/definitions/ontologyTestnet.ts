import { defineChain } from '../../utils/chain/defineChain.js'

export const ontologyTestnet = /*#__PURE__*/ defineChain({
  id: 5851,
  name: 'Ontology Testnet',
  nativeCurrency: {
    decimals: 9,
    name: 'ONG',
    symbol: 'ONG',
  },
  rpcUrls: {
    default: { http: ['https://polaris1.ont.io:10339'] },
  },
  blockExplorers: {
    default: {
      name: 'Ontology Blockchain Explorer',
      url: 'https://explorer.ont.io/testnet',
    },
  },
})
