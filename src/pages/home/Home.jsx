import React from "react";
import { BestDeals } from "../../components/bestdeals/BestDeals";
import Discover from "../../components/discover/Discover";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ViewAll from "../../components/viewallcard/ViewAll";

const Home = () => {
  return (
    <>
      <Header />
      <Discover />
      <ViewAll />
      <BestDeals />
      <Footer />
    </>
  );
};

export default Home;
