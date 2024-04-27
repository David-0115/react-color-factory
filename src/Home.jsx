import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import './Home.css'

const Home = ({ colors }) => {

    return (
        <div className="Home-container">
            <div className="Home-header-div">
                <h3>Welcome to the color factory.</h3>
                <Link to="/colors/new">
                    <h1 className="Home-h1">Add a color</h1>
                </Link>
            </div>
            <div className="Home-colors-div">
                <p>Please select a color</p>
                {colors.map((item, index) => (
                    <Link key={item.color} to={`/colors/${item.colorName}`}>
                        {item.colorName}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home;