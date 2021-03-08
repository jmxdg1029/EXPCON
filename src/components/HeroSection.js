import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../components/HeroSection.scss';
import Button from 'react-bootstrap/Button';
import NavTool from './NavTool';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import image1 from '../components/images/image 1_1.png';
import image2 from '../components/images/Image 2.png';
import image3 from '../components/images/Image 3.png';

class HeroSection extends Component {
    render() { 
        const image = [
            {  original:image1,},
            {original:image2},
            {original:image3}
        ]
        return (
            <div className="hero-section">
                <div className="d-flex align-items-center justify-content-center">
                        <h1 className="font-weight-normal carousel-title display-4">INTERACTIVE CONCERT EXPERIENCE</h1>
                        <p className="font-weight-normal carousel-content  w-50" style={{font:"4em"}}>Experience your favourite artists like never before and from the comfort of your own home</p>
                        <a href="#" className="btn-mix-noborder try_bt" >TRY IT NOW</a>
                </div>

                {/*react-image-gallery object:cover, erased max-height: calc(100vh - 80px); */}
                <ImageGallery  additionalClass="hero-slide"className="hero-slide" showThumbnails={false} autoPlay={true} showBullets={true} showNav={false} showFullscreenButton={false} showPlayButton={false} items={image}>
                </ImageGallery>
           
        </div>
        );
    }
}
 
export default HeroSection;