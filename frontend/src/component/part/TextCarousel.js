import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './css/homeCarousel.css'
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import './css/TextCarousel.css'

class TextCarousel extends Component {
    render() {
        const img = "https://s1.1zoom.ru/b5050/709/293555-alexfas01_1440x900.jpg";
        return (
            <div className="carousel-wrapper">
                <div className="carousel-item">
                    <div className="carousel-img-wrapper">
                        <div className="carousel-arrow-left"></div>
                        <div className="carousel-arrow-right"></div>
                    </div>
                    <div className="carousel-text-wrapper">
                        <h2></h2>
                        <p></p>
                        <Link to="/"></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextCarousel;
