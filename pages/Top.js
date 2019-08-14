import React from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../src/Header';
import RestaurantImages from '../src/RestaurantImages';

const Top = props => {
  return (
    <div>
      <Header />
      <RestaurantImages restaurants={props.restaurantsJ} />
    </div>
  );
};

Top.getInitialProps = async ctx => {
  const host = process.env.API_HOST;
  const { keyword, area } = ctx.query;
  const keywordEnc = encodeURIComponent(keyword);
  const areaEnc = encodeURIComponent(area);
  const url = `${host}/api/rests?area=${areaEnc}&keyword=${keywordEnc}`;
  console.log(url);
  const restaurants = await fetch(url);
  const restaurantsJ = await restaurants.json();
  return {
    restaurantsJ,
  };
};

export default Top;
