import React, { useState,useEffect } from 'react';
import '../components/YellowSection.css';
import ReactRoundedImage from 'react-rounded-image';
import gambino from '../components/images/Image 4.png';
import { CircularRevealPanel } from 'react-circular-reveal';
import {useTrail} from 'react-spring'



const YellowSection = () => {
        const [position, setPosition] = useState({x: 0, y: 0});
        useEffect(() => {
                   addEventListeners();
                  return () => removeEventListeners();
              }, []);

              const addEventListeners = () => {
                       document.addEventListener("mousemove", onMouseMove);
                   };
                
              const removeEventListeners = () => {
                  document.removeEventListener("mousemove", onMouseMove);
              };
            
              const onMouseMove = (e) => {
                  setPosition({x: e.clientX, y: e.clientY});
              };  


        return ( 
            
            <div className="yellow-section">
                <div className="cursor"
           style={{
               left: `${position.x}px`,
               top: `${position.y}px`
           }}/>
                <a href="#" className="try_it_now-y float-right" ><span>TRY IT NOW</span></a>
                <div className="container">
                <div className="row display-yellow">
                    <div className="col col-md-auto">
                        <ReactRoundedImage
                        image={gambino}
                        roundedSize="0"
                        />
                    </div>
                    <div className="col ">
                    <h1 className="text-white">FRONT ROW SEATS</h1>
                    <p className="h1">Experience concerts up close and personal.</p>
                    <a href="#" className="see-demo-yellow"><span>SEE DEMO</span></a>
                    </div>
                </div>
                </div>
            </div> 
   
        );
}
 
export default YellowSection;