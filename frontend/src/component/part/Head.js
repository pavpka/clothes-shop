import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css';

const array = ['lol', 'kek'];

class Head extends Component {
    render() {
        return (
            <div className="head-component bg-primary">
                <ul className="main-header">
                    <li className="first-child"><Link to="/">
                        <img src="https://pp.userapi.com/c836625/v836625268/55542/mu1p7cLzxVY.jpg"/>
                    </Link></li>
                    <li>
                        <ul className="head-content">
                            <li className="nav-item"><Link to="/">Женское</Link></li>
                            <li><Link to="/">Мужское</Link></li>
                            <li><Link to="/">Детское</Link></li>
                            <li><Link to="/">Аксессуары</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">Вход</Link></li>
                    <li><Link to="/">Регистрация</Link></li>
                </ul>
            </div>
        )
    }
}

export default Head;
