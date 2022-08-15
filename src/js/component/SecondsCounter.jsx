import React from "react";
import propTypes from "prop-types";

//create your first component
const SecondsCounter = (props) => {
    return (
        <div className="big-counter justify-content-center">
            <div>
                <i className="far fa-clock #offset"></i>
            </div>
            <div>
                {props.hours}
                <span className="text">H</span>
            </div>
            
            <span className="dots">:</span>

            <div>{props.minutes}
                <span className="text">M</span></div>

            <span className="dots">:</span>
            
            <div>{props.seconds}
                <span className="text">S</span></div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: propTypes.number,
    minutes: propTypes.number,
    hours: propTypes.number,
}

export default SecondsCounter;
