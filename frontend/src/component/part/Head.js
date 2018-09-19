import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css';

const array = ['lol', 'kek'];

class Head extends Component {
    render() {
        return (
            <div className="head-component">
                <ul className="categories">
                    <li className="first-child"><Link to="/">
                        <img src="https://pp.userapi.com/c836625/v836625268/55542/mu1p7cLzxVY.jpg"/>
                    </Link></li>
                    <li><Link to="/">Женское</Link>
                        <ul className="submenu">
                            <li><Link to="/">lol1</Link></li>
                            <li><Link to="/">kek1</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">Мужское</Link>
                        <ul className="submenu">
                            <li><Link to="/">lol2</Link></li>
                            <li><Link to="/">kek3</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">Детское</Link>
                        <ul className="submenu">
                            <li><Link to="/">lol3</Link></li>
                            <li><Link to="/">kek3</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">Аксессуары</Link>
                        <ul className="submenu">
                            <li><Link to="/">lol4</Link></li>
                            <li><Link to="/">kek4</Link></li>
                        </ul>
                    </li>
                    <li className="sign"><Link to="/">Вход</Link></li>
                    <li className="sign"><Link to="/">Регистрация</Link></li>
                </ul>
            </div>
        )
    }
}

export default Head;
