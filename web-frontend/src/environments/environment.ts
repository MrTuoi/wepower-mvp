// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    exchangeAddress: '',
    dataUrls: {
    locationArea: '/api/v1/location-area',
    houseSize: '/api/v1/house-size',
    plant: {
      root: '/api/v1/plant',
      activate: 'activate',
      blockchainData: 'blockchain/data',
      predictionData: 'production/predicted',
      predictionPeriod: 'production/predicted/period',
      predictionTotal: 'production/predicted/total',
      productionReview: 'production/predicted/review'
    },
    consumer: {
      root: '/api/v1/consumer',
      activate: 'activate',
      prediction: 'consumption/predicted',
      predictionPeriod: 'consumption/predicted/period',
      predictionTotal: 'consumption/predicted/total',
      consumptionReview: 'consumption/predicted/review'
    },
    market: {
      ethereumPrice: '/api/v1/market/ethereum/price',
      electricityPrice: '/api/v1/market/electricity/price',
    },
    wallet: {
      root: '/api/v1/wallet'
    },
    transactions: {
      root: '/api/v1/transaction/log',
      consumer: '/api/v1/transaction/log/consumer',
      plant: '/api/v1/transaction/log/plant'
    },
    prices: {
      root: '/api/v1/price/log',
      period: '/api/v1/price/log/period',
      date: '/api/v1/price/log/date'
    }
  }
};
