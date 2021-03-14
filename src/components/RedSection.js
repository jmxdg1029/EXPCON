import React, { Component } from 'react';
import '../components/RedSection.scss';
import speaker1 from '../components/images/medium17.png';
import speaker2 from '../components/images/medium27.png';


class RedSection extends Component {
    
    render(){ 
        return ( 
        <div className="red-section">
            <a href="#" className="try_it_now float-right" ><span>TRY IT NOW</span></a>
                <div className="row display-red">
                    <div className="col-md-6 mt-3">
                        <div>
                        <h1 className="text-white red-heading mt-5">SUPERIOR SOUND</h1>
                        <p className="h1 red-description">Experience live version of your favourite songs.</p>
                        </div>
                        <a href="#" className="see-demo"><span>SEE DEMO</span></a>
                    </div>
                    <div className="col-md-6 ">
                        <div><img src={speaker1} className="speaker-img" /></div>
                        <div><img src={speaker2} className="speaker-img2"/></div>
                        <div className="cicle-click "><a href="#" className="click"  style={{fontSize:"1.7em"}}>CLICK</a></div>
                    </div>
                </div>
        </div> );
    }
}
 
export default RedSection;