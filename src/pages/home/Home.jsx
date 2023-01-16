import React from "react";
import { BestDeals } from "../../components/bestdeals/BestDeals";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ViewAll from "../../components/viewallcard/ViewAll";

const Home = () => {
  return (
    <>
      <Header /> <ViewAll />
      <BestDeals />
      <Footer />
    </>
  );
};

export default Home;
