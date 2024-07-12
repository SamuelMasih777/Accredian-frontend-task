import React, { Fragment, useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import FAQSection from '../components/FAQSection';
import BenefitsSection from '../components/BeniftsSection';
import Footer from '../components/Footer';
import RewardsTable from '../components/Rewards';
import { scroller } from 'react-scroll';



function MainPage() {
    // useEffect(() => {
    //     // Scroll to the "refer" section by default
    //     scroller.scrollTo('refer', {
    //       duration: 500,
    //       delay: 0,
    //       smooth: 'easeInOutQuart',
    //       offset: -70, // Adjust based on your header height
    //     });
    //   }, []);
  return (
    <Fragment>        
      {/* <NavigationBar />       */}
      <HeroSection />      
      <BenefitsSection />
      <RewardsTable/>
      <FAQSection />
      <Footer />
      </Fragment>
  );
}

export default MainPage;