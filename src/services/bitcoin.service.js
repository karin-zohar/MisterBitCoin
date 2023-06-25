import axios from "axios"
export const bitcoinService = {
    getRate,
    // getMarketPriceHistory,
    // getAvgBlockSize,
}

async function getRate() {
    try {
        const bitcoinRate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        console.log('bitcoinRate: ', bitcoinRate)
        return bitcoinRate.data
    } catch (err) {
        console.log(err)
    }
}