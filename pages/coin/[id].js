import Layout from "../../components/Layout";
import Styles from "./coin.module.css";

import React from "react";

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={Styles.coin_page}>
        <div className={Styles.coin_container}>
          <img
            src={coin.image.large}
            alt={coin.name}
            className={Styles.coin_image}
          />
          <h1 className={Styles.coin_name}>{coin.name}</h1>
          <p className={Styles.coin_ticket}>{coin.symbol}</p>
          <p className={Styles.coin_current}>
            {coin.market_data.current_price.eur}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
