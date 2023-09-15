import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import banner1 from '../../../src/Images/Banner/banner-1.png';
import banner2 from '../../../src/Images/Banner/banner-2.png';
import banner3 from '../../../src/Images/Banner/banner-3.png';

const Banner = () => {
    return (
        <Carousel className='container'>
            <Carousel.Item>
                <Image src={banner1} className='w-100'/>
                <Carousel.Caption>
                    <h3>WELCOME TO HOTEL DYNAMIC CHITTAGONG</h3>
                    <p>A Place of Luxury</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={banner2} className='w-100'/>
                <Carousel.Caption>
                    <h3>Be Our Guest</h3>
                    <p>Please Take A Tour...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={banner3} className='w-100'/>
                <Carousel.Caption>
                    <h3>Dynamic Chittagong Rest House With A Beautiful Swimming Pool</h3>
                    <p>
                        Come and visit 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;