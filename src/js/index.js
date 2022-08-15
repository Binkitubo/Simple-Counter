//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

let seconds = 0;
let minutes = 0;
let hours = 0;

setInterval(function () {
    seconds++
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    } 
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    ReactDOM.render(<SecondsCounter seconds = {seconds} minutes = {minutes} hours = {hours}/>, document.querySelector("#app"));
}, 1000);