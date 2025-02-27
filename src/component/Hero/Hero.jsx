import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import React from 'react';
import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Header from '../Header/Header';
import './Hero.css';


const Hero = () => {
  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>

{/* The best ad */}
            <div className="the-best-ad">
              <motion.div
              initial = {{left: mobile ? "165px": '238px'}}
              whileInView={{left: '8px'}}
              transition={{...transition, type: 'tween'}}
              ></motion.div>
              <span>the best fitness club in Jalandhar</span>
            </div>

{/* Hero Heading */}
            <div className='hero-text'>
              <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
              </div>
              <div>
                <span>Ideal </span>
                <span className='stroke-text'>Body</span></div>
              
              <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
              </div>
        </div>
        {/* Figures  */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='5' preFix="+" />
            </span>

            <span>Expert coachs</span>
          </div>

          <div>
            <span>
            <NumberCounter end={978} start={800} delay='5' preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>

          <div>
            <span>
            <NumberCounter end={50} start={20} delay='5' preFix="+" />
            </span>
            <span>Fitness Programs</span>
          </div>
          
        </div>

        {/* Hero button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        </div>

        
        <div className="right-h">
          
          <button className="btn" 
           >Join Now</button>





          <motion.div 
          className="heart-rate" 
          transition={transition}
          initial = {{right: "-1rem"}}
          whileInView={{right: "4rem"}}
          >
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>

          {/* Hero images */}
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img 
          initial = {{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />

          {/* calories */}
          <motion.div 
          initial = {{right: "37rem"}}
          whileInView={{right: "28rem"}}
          transition={transition}
          className="calories" 
          >
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220Kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero;