import React from 'react';
import {useState} from "react";

function AboutUs(props) {

    const [count , setCount] = useState("")


    const increment = () => {
        setCount(count => "-Hello-" )
    }


    return (
        <>
            <button onClick={increment}>Кнопка</button>
            <h1>{count}</h1>
        </>
    );
}

export default AboutUs;