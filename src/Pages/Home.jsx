import React from 'react';
import Category from '../components/Category';
import Banner from '../components/Banner';
import Features from '../components/Features';
import AboutFeature from '../components/AboutFeature';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <AboutFeature></AboutFeature>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
};

export default Home;
