import React from "react";
import Products from "./products";
import Banner from "./banner";
import { Button } from "bootstrap";
const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark border-0 ">
                <Banner className="card-img" alt="background" height="450px" / >
                <div className="card-img-overlay">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">Search OnLine</h5>
                    <p className="card-text lead fs-2">.</p>
                    <button className="btn btn-outline-dark me-2">EXPLORE NOW</button>

                    </div>
                </div>
            </div>
            <Products />

        </div>

    );
}
export default Home;