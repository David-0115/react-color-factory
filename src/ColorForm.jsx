import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ColorForm.css'

const ColorForm = ({ addColor }) => {
    const navigate = useNavigate();
    const INITIAL_STATE = {
        colorName: "",
        color: "#FFFFFF"
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    document.body.style.background = "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)";

    const handleSubmit = evt => {
        evt.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
        document.body.style.background = ''
        navigate("/colors");
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    return (
        <div className="ColorForm-div">
            <form onSubmit={handleSubmit} className="ColorForm-form">
                <div className="ColorForm-input-div">
                    <label htmlFor="colorName">Color Name:</label>
                    <input
                        type="text"
                        name="colorName"
                        id="colorName"
                        value={formData.colorName}
                        onChange={handleChange}
                    />
                </div>
                <div className="ColorForm-input-div">
                    <label htmlFor="color">Color:</label>
                    <input
                        type="color"
                        name="color"
                        id="color"
                        value={formData.color}
                        onChange={handleChange}
                    />
                </div>
                <button className="ColorForm-btn">Add this color</button>
            </form>
        </div>
    )
}

export default ColorForm;