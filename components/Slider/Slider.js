import React, {useState} from 'react'
import  sliderStyle  from "../../styles/shared/Slider.module.scss";
import BtnSlider from "./BtnSlider";
import dataSlider from './DataSlider.js'

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return ( 
        <div className={ sliderStyle.containerSlider }>
            <div className="Images w-full bg-red-600">

                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? sliderStyle.slide + " " + sliderStyle.activeAnim : sliderStyle.slide}
                        >
                            <img 
                            src={`/Imgs/img${index + 1}.png`} 
                            />
                        </div>
                    )
                })}


                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            </div>
            
            <div className={sliderStyle.containerDots}>
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? sliderStyle.dot + " bg-gradient-to-r from-indigo-500 to-blue-600 " + sliderStyle.active : sliderStyle.dot}
                    ></div>
                ))}
            </div>

        </div>
     );
}
 
export default Slider;