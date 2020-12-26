import React from "react";

import Hero from "../components/heroComponent/Hero";
import Featured from "../components/Featured";
import Services from "../components/Services";

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Hero>
        <Services />
      </Hero>
      <Featured />
    </>
  );
};

export default Home;
