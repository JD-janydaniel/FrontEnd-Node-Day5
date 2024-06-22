import React from "react";
import Navbar from "../Components/Navbar";
import '../index.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header>
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center py-4 g-5">
              <div className="col-12 col-md-6">
                <div className="text-center text-md-start">
                  <h1 className="display-md-2 display-4 fw-bold text-dark pb-2">
                    <span className="tts">Dis</span>
                    <span className="ttc">cover</span> the Tastes of India
                  </h1>
                  <p className="lead">
                    Explore the variety of culineries from the different parts
                    of the India and enjoy the taste of it.
                  </p>
                  <Link to='/register' className="btn butn fw-bold px-5 py-3 mt-3 fs-5">
                    Discover Now
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img
                  src="http://smashingapps.com/wp-content/uploads/2013/05/foodvectordesign31.jpg"
                  alt="Foood Image"
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Home;
