import React from 'react';
import Banner from '../Banner/Banner';
import MainOffering from '../MainOffering/MainOffering';
import ExoticPlace from '../ExoticPlace/ExoticPlace';
import LastOffers from '../LastOffers/LastOffers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MainOffering></MainOffering>
            <ExoticPlace></ExoticPlace>
            <LastOffers></LastOffers>
        </div>
    );
};

export default Home;