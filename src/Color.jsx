import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Color.css';

const Color = ({ colors }) => {
    const { color } = useParams();
    const navigate = useNavigate();
    const colorObj = colors.find((item) => item.colorName === color)

    useEffect(() => {
        if (colorObj) {
            document.body.style.backgroundColor = colorObj.color;
        }

        return () => {
            document.body.style.backgroundColor = '';
        }
    }, [colorObj])
    if (colorObj) {
        return (
            <div className="Color-div">
                <h1 className="Color-h1">This is {colorObj.colorName}</h1>
                <h1 className="Color-h1">Isn't it beautiful</h1>
                <h3 className="Color-h3" onClick={() => navigate(-1)}>Go Back</h3>
            </div>
        )
    } else {
        useEffect(() => {
            navigate("/colors")
        }, [])
    }
}

export default Color;