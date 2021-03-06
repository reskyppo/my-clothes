import React from "react";
import CardLabel from "./CardLabel";
import Carousel from "./Carousel";
const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen md:px-24">
      <h1 className="text-center text-4xl font-semibold py-4">Bajuku</h1>
      {/* soon will add carousel for small device */}
      {/* or */}
      {/* if i have more categories */}
      <section className="py-8 ">
        <div className=" hidden md:flex  justify-center items-center">
          <CardLabel label="Girls" color="bg-pinky" img="/images/Girls.png" />
          <CardLabel label="Boys" color="bg-blue" img="/images/Boys.png" />
        </div>
        <div className="]flex md:hidden">
          <Carousel />
        </div>
      </section>

      <section className="flex flex-row justify-between md:justify-start items-center px-8">
        <h1 className="font-semibold text-xl">Recommeded</h1>
        <p className="text-base text-gray-500 md:mx-4">see all</p>
      </section>
    </div>
  );
};

export default Home;
