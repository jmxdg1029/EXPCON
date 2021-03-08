import React, { Component } from 'react';
import '../components/RedSection.scss';
import speaker1 from '../components/images/medium17.png';
import speaker2 from '../components/images/medium27.png';


class RedSection extends Component {
    
    render() { 
        

        return ( 
        <div className="red-section">
            <a href="#" className="try_it_now float-right" ><span>TRY IT NOW</span></a>
            
            <div className="container ">
                <div className="row   display-red">
                    <div className="col ">
                        <div>
                        <h1 className="text-white red-heading">SUPERIOR SOUND</h1>
                        <p className="h1 red-description">Experience live version of your favourite songs.</p>
                        </div>
                        <a href="#" className="see-demo"><span>SEE DEMO</span></a>
                    </div>
                    <div className="col-md-auto "></div>
                    <div className="col col-lg-1 ml-5 speaker-img1 ">
                        <div><img src={speaker1} className="speaker-img" /></div>
                    </div>
                    <div className="col col-lg-1 ml-5">
                    <div className="speaker-img2"><img src={speaker2}/></div>
                    </div>
                </div>
              
            </div>
            <div className="cicle-click float-right"><a href="#">Click Me</a></div>
        </div> );
    }
}
 
export default RedSection;