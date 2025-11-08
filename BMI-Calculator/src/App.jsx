import React, { useRef, useState } from "react";
import "./index.css"
export default function BMICalculator() {
    const heightRef = useRef();
    const weightRef = useRef();
    const [bmi,setBmi] = useState ("");

    const calcBMI = (e) => {
        e.preventDefault();
        const h = heightRef.current.value / 100 ;
        const w = weightRef.current.value;
        if (h && w)setBmi((w / (h*h)).toFixed(2));
    };
    return (
    <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBMI}>
            <input className="height" type="number" ref={heightRef} placeholder="Height(cm)"/><br/><br/>
            <input className="weight" type="number" ref={weightRef} placeholder="Weight(kg)"/><br/><br/>
            <button className="btn" type="submit">Calculate</button>
        </form>
        {bmi && <h3 className="result">Your BMI:{bmi}</h3>}
    </div>
    );
}