import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Cooking from "../../assets/home.mp4";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home">
      <div className="caption">
        <h2>Nothing Brings You Together Like Good Food</h2>
        <h3>Explore your choices</h3>
        <NavLink className="btn" to="/recipes">
          Explore
        </NavLink>
      </div>

      <video loop muted autoPlay preload="auto">
        <source src={Cooking} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
