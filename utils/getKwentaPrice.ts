import axios from 'axios';

const UNISWAP_SUBGRAPH_LINK = 'https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis';

const kwentaEthPoolQuery = `{
  pool(id: "0x36e42931a765022790b797963e42c5522d6b585a") {
    token0 {
      volume
      volumeUSD
    }
    token0Price
    token1 {
      volume
      volumeUSD
    }
    token1Price
  }
}`;

export const getKwentaPrice = async () => {
  try {
    const res = await axios.post(UNISWAP_SUBGRAPH_LINK, {
      query: `{
        pool(id: "0x36e42931a765022790b797963e42c5522d6b585a") {
          token0 {
            volume
            volumeUSD
          }
          token0Price
          token1 {
            volume
            volumeUSD
          }
          token1Price
        }
      }`
    });

    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
