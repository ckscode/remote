import React from 'react'
import "./Hero.css"
import audiophile from '../images/audiophile.svg'
import databiz from "../images/databiz.svg"
import meet from "../images/meet.svg"
import marker from "../images/maker.svg"
 const Hero = () => {
  return (
    <div className='herocnt'>
        <div className='heroin'>
        <div className='hero1'>
            <div className='hero1in'>
            <div>  
            <h1>Make remote work</h1>
            <p>Get our team in sync,no matter your location.
                Streamline processes,create team rituals,and 
                watch productivity soar.
            </p>
            <div className='hero1btn'>
            <button>Learn more</button></div></div>  
            <div className='heroser'>
                <img src={databiz} alt="" />
                <img src={audiophile} alt="" />
                <img src={meet} alt="" />
                <img src={marker} alt="" />
            </div>
            </div>
        </div>
        <div className='hero2'>
            
        </div>
        </div>
    </div>
  )
}

export default Hero