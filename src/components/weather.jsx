import React, { useState } from 'react';
import hotBg from "./Assets/hotBg.jpg";
import coldBg from "./Assets/cold.jpg";

const weather = async() => {
    const API_KEY ="b4ce7e2e75269055856ae3f636fa8bbb";

const city = "Dhaka";
const units= "metric"
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
    console.log(data)
    return (
        <div>

        </div>
    )
}

export default weather