import axios from "axios"
import { utilService } from '../services/util.service'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}
const BITCOIN_DATA = 'BITCOIN_DATA'
const CACHE_TIME = 1000 * 10 * 60 * 24 //24 hours
let gBitcoinData = utilService.loadFromStorage(BITCOIN_DATA) || {}

async function getRate() {
    const exchangeRate = gBitcoinData.exchangeRate
    const lastRequest = gBitcoinData?.exchangeRate?.reqTimeStamp
    if (exchangeRate && Date.now() - lastRequest < CACHE_TIME) return exchangeRate.data
    try {
        const bitcoinRate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        gBitcoinData.exchangeRate = {
            data: bitcoinRate.data,
            reqTimeStamp: Date.now(),
          }
          utilService.saveToStorage(BITCOIN_DATA, gBitcoinData)
          return bitcoinRate.data
    } catch (err) {
        console.log(err)
    }

}

async function getMarketPriceHistory() {
    const priceHistory = gBitcoinData.priceHistory
    const lastRequest = gBitcoinData?.priceHistory?.reqTimeStamp
  
    if (priceHistory && Date.now() - lastRequest < CACHE_TIME) {
      console.log('priceHistory.data:', priceHistory.data)
  
      return priceHistory.data
    } else {
      try {
        const response = await axios.get(
          'https://api.blockchain.info/charts/market-price?timespan=12months&format=json&cors=true'
        )
        console.log('response:', response)
  
        gBitcoinData.priceHistory = {
          data: response.data,
          reqTimeStamp: Date.now(),
        }
  
        utilService.saveToStorage(BITCOIN_DATA, gBitcoinData)
        return response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
  
  async function getAvgBlockSize() {
    const avgBlockSize = gBitcoinData.avgBlockSize
    const lastRequest = gBitcoinData?.avgBlockSize?.reqTimeStamp
  
    if (avgBlockSize && Date.now() - lastRequest < CACHE_TIME) {
      return avgBlockSize.data
    } else {
      try {
        const response = await axios.get(
          'https://api.blockchain.info/charts/avg-block-size?timespan=12months&format=json&cors=true'
        )
        gBitcoinData.avgBlockSize = {
          data: response.data,
          reqTimeStamp: Date.now(),
        }
        utilService.saveToStorage(BITCOIN_DATA, gBitcoinData)
        return response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
  