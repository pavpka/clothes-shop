import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './css/homeCarousel.css'
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class HomeCarousel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-carousel-component">
                <Carousel>
                    {this.props.pictures.map((picture) =>
                        <Carousel.Item>
                            <Link to="/"><img src={picture.src}/></Link>
                            <Carousel.Caption>
                                <div hidden={!this.props.isCaptionExist}>
                                    <h3>{picture.title}</h3>
                                    <p>{picture.price}</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        )
    }
}

HomeCarousel.propTypes = {
    pictures: PropTypes.array.isRequired
};

export default HomeCarousel;
