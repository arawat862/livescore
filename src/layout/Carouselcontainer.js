import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';

const Carouselcontainer = () => {
    return (
        <Carousel controls={false} pause={false} fade={true}>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image1}
                alt="First slide" style={{height:"60vh"}}/>

            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image2}
                alt="Second slide" style={{height:"60vh"}}/>

            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image3}
                alt="Third slide" style={{height:"60vh"}}/>

            </Carousel.Item>
        </Carousel>
    )
}


export default Carouselcontainer;
