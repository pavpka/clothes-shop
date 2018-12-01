import React, {Component} from 'react';
import './css/mainCards.css'
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class MainCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-cards-component">
                {this.props.pictures.map((picture) =>
                    <Link to="/"><img id="imgCard" src={picture.src}/><div className="title-for-card">{picture.title}</div></Link>
                )}
            </div>
        )
    }
}

MainCards.propTypes = {
    pictures: PropTypes.array.isRequired
};

export default MainCards;
