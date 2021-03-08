import React, { Component } from 'react';
import '../components/YellowSection.css';
import ReactRoundedImage from 'react-rounded-image';
import gambino from '../components/images/Image 4.png';

class YellowSection extends Component {

    render() { 
        return ( 
            
        <div className="yellow-section">
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
        </div> );
    }
}
 
export default YellowSection;