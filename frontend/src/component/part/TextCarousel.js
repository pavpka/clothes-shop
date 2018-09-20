import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './css/homeCarousel.css'
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class TextCarousel extends Component {
    render() {
        return (
            <div className="carousel-wrapper" style={{height: "400px"}}>
                <div className="carousel-item">
                    <div className="carousel-img-wrapper">
                        <div className="carousel-arrow-left"></div>
                        <div className="carousel-arrow-left"></div>
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
