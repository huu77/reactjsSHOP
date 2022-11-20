import React from "react";
import { NavLink } from "react-router-dom";
import bg from "../asset/bg.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white boder-0 ">
        <img src={bg} class="card-img" alt="..." height="550px" />
        <div class="card-img-overlay d-flex  flex-column justify-content-center ">
          <div class="container d-flex  flex-row-reverse">
            <div class="w-50">
              <h5 class="card-title fs-3 fw-boder">NEW SEASON ARRIVAL</h5>
              <p class="card-text">CHECK OUT ALL THE TRENDS.</p>
              <NavLink to={`/contact`} className="btn btn-outline-dark fw-bold w-25" >
                      Contact
                    </NavLink>
            </div>
        
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

Home.propTypes = {};

export default Home;
