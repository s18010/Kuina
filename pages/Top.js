import React from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../src/Header';
import RestaurantImages from '../src/RestaurantImages';

const Top = props => {
  return (
    <div>
      <Header />
      <RestaurantImages restaurants={props.restaurants_j} />
    </div>
  );
};

Top.getInitialProps = async ctx => {
  const host = process.env.API_HOST;
  const { keyword, area } = ctx.query;
  const keyword_enc = encodeURIComponent(keyword);
  const area_enc = encodeURIComponent(area);
  const url = `${host}/api/rests?area=${area_enc}&keyword=${keyword_enc}`;
  console.log(url);
  const restaurants = await fetch(url);
  const restaurants_j = await restaurants.json();
  return {
    restaurants_j,
  };
};

export default Top;
