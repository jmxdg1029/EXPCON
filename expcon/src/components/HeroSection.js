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
                        <a href="#" className="btn-mix-noborder" >TRY IT NOW</a>
                </div>
         
                <ImageGallery  additionalClass="hero-slide"className="hero-slide" showThumbnails={false} showBullets={true} showNav={false} showFullscreenButton={false} showPlayButton={false} items={image}>
                </ImageGallery>
           
                {/* <Carousel >
                    <Carousel.Item id="image_1">
                    </Carousel.Item>
                    <Carousel.Item  id="image_2">
                    </Carousel.Item>
                    <Carousel.Item id="image_3">
                    </Carousel.Item>
                </Carousel> */}
        </div>
        );
    }
}
 
export default HeroSection;