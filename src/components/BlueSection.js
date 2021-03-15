import React, { Component } from 'react';
import blue_speaker from '../components/images/SmallSpeaker1-03.png';
import blue_speaker2 from '../components/images/SmallSpeaker2-03.png';
import '../components/BlueSection.css';

class BlueSection extends Component {
    render() { 
        return (
        <div className="blue-section">
            <a href="#" className="try_it_now float-right" ><span>TRY IT NOW</span></a>
            <div className="row display-blue">
                
                <div className="col">
                    <img src={blue_speaker} className="blue-speaker"/>
                    <img src={blue_speaker2} className="blue-speaker2"/>
                </div>
                <h1 className="text-white blue-heading">REVIEWS</h1>
                <div className="col artist-display">
                    <span className="star">★★★★★</span>
                    <h2 className="text-white">ARTIST</h2>
                    <p className="desc">"Love it, it's the Best.I can't live without it!"</p>
                </div>
                <div className="col produce-display">
                    <span className="star">★★★★★</span>
                    <h2 className="text-white">PRODUCER</h2>
                    <p className="desc">"Love it, it's the Best.I can't live without it!"</p>
                </div>
                <div className="col music-display">
                    <span className="star">★★★★★</span>
                    <h2 className="text-white">MUSIC FAN</h2>
                    <p className="desc">"Love it, it's the Best.I can't live without it!"</p>
                </div>
            </div>
        </div>);
    }
}
 
export default BlueSection;