import React from 'react';

import './assets/css/styles.css'
import Header from './components/Header/Header';
import SecFeatures from './components/SecFeatures/SecFeatures';
import SecInfo from './components/SecInfo/SecInfo';
const HomePage = () => {
    return (
        <>
        <Header />
        <SecInfo />
        <SecFeatures />
        </>
    );
}

export default HomePage;