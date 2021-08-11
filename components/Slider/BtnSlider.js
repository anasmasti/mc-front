import React from "react";
import  sliderStyle  from "../../styles/shared/Slider.module.scss";
import leftArrow from "../../public/icons/left-arrow.svg";
import rightArrow from "../../public/icons/right-arrow.svg";


const BtnSlider = ({ direction, moveSlide }) => {

    return ( 
        <button
            onClick={moveSlide}
            className={direction === "next" ? sliderStyle.btnSlide + " bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 " + sliderStyle.next : sliderStyle.btnSlide + " bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 " + sliderStyle.prev }
        >
        <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
        );
}
 
export default BtnSlider;