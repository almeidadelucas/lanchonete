import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../_assets/img/slide1.jpg'
import slide2 from '../../_assets/img/slide2.jpg'
import slide3 from '../../_assets/img/slide3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Home = () => {
  return (
    <div className="home-content">
    <Carousel className="home-carousel">
      <Carousel.Item>
        <img 
          src={slide1}
          alt="First Slide"
          className="home-carousel-item"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide2}
          alt="Second Slide"
          className="home-carousel-item"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={slide3}
          alt="Third Slide"
          className="home-carousel-item"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;
