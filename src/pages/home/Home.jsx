import React from "react";
import { BestDeals } from "../../components/bestdeals/BestDeals";
import Discover from "../../components/discover/Discover";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Popular from "../../components/poplular/Popular";
import Trending from "../../components/trending/Trending";
import ViewAll from "../../components/viewallcard/ViewAll";

const Home = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  

  return (
    <>
      <Header />
      <Discover />
      <Trending
        heading="What's Trending"
        dec="Let's not wait for the Perfect Look"
        bg='gray'
        style={style}
      />
      <Popular
        heading='Popular Spa & Salon'
        dec='We want you to look fabulous'
        align='left'
      />
      <ViewAll />
      <BestDeals />
      <Footer />
    </>
  );
};

export default Home;
