import React from 'react';
import fetch from 'isomorphic-unfetch';
import Header from '../src/Header';
import SliderSample from '../src/Slider';
import RestaurantImages from '../src/RestaurantImages';

const Top = props => {
  return (
    <div>
      <Header />
      <SliderSample />
      <RestaurantImages restaurants={props.restaurants_j} />
    </div>
  );
};

Top.getInitialProps = async ctx => {
  const restaurants = await fetch('http://localhost:3000/api/rests');
  const restaurants_j = await restaurants.json();
  return {
    restaurants_j,
  };
};

export default Top;
