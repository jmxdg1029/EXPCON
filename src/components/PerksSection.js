import React, { Component } from 'react';
import '../components/PerkSection.css';

class PerksSection extends Component {
    
    render() { 
        return ( 
        <div className="perks-section">
            <a href="#" className="btn-mix-noborder perk-button" ><span>TRY IT NOW</span></a>
            <div className="container">
            
                <div className="row display-perk">
                    <div className="col red-desc ">
                    <h1 className="text-white perk-heading">PERKS</h1>
                        <hr className="red-hr" />
                        <h2 className="">Subscription Payment Model</h2>
                        <p className="text-white mt-3">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                    <div className="col mt-5 blue-desc">
                        <hr className="mt-5 blue-hr" />
                        <h2 className="">No Fee Cancelation Policy</h2>
                        <p className="text-white mt-4">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                        <div className="col mt-5 yellow-desc">
                            <hr className=" mt-5 yellow-hr" />
                            <h2 className="">Subscription Payment Model</h2>
                            <p className="text-white mt-4">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                        </div>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default PerksSection;