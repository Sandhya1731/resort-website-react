import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
import { Link } from "react-router-dom";
const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms" subtitle="">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </div>
  );
};

export default Rooms;
