import axios from 'axios';

const COINGECKO_API_LINK = 'https://api.coingecko.com/api/v3/simple/token_price';

const KWENTA_CONTRACT_ADDRESS = '0x920Cf626a271321C151D027030D5d08aF699456b';

export const getKwentaPrice = async () => {
  try {
    const res = await axios.get(
      `${COINGECKO_API_LINK}/optimistic-ethereum/?contract_addresses=${KWENTA_CONTRACT_ADDRESS}/&vs_currencies=usd&precision=4`
    );

    return res.data[KWENTA_CONTRACT_ADDRESS]?.usd;
  } catch (e) {
    console.error(e);
    return null;
  }
};
