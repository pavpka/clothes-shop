import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/newClothes.css'

class NewClothes extends Component {
    render() {
        return (
            <div className="new-clothes-component">
                <ul className="new-clothes-content">
                    <li className="new-clothes-img">
                        <Link to="/"/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NewClothes;  
