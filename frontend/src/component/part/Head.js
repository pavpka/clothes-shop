import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css';
import MobileMenu from './MobileMenu'

const array = ['lol', 'kek'];

class Head extends Component {
    render() {
        return (
            <div className="head-component">
                <ul className="categories">
                    <li className="first-child head-component-li"><Link to="/">
                        <img src="https://pp.userapi.com/c836625/v836625268/55542/mu1p7cLzxVY.jpg"/>
                    </Link></li>
                    <li className="head-component-li"><Link to="/women">Женское</Link>
                        <ul className="submenu">
                            <li><Link to="/">lol1</Link></li>
                            <li><Link to="/">kek1</Link></li>
                        </ul>
                    </li>
                    <li className="head-component-li"><Link to="/men">Мужское</Link>
                        <ul className="submenu">
                            <li><Link to="/">lol2</Link></li>
                            <li><Link to="/">kek3</Link></li>
                        </ul>
                    </li>
                    <li className="head-component-li"><Link to="/child">Детское</Link>
                        <ul className="submenu">
                            <li><Link to="/">lol3</Link></li>
                            <li><Link to="/">kek3</Link></li>
                        </ul>
                    </li>
                    <li className="head-component-li"><Link to="/access">Аксессуары</Link>
                        <ul className="submenu">
                            <li><Link to="/">lol4</Link></li>
                            <li><Link to="/">kek4</Link></li>
                        </ul>
                    </li>
                    <li className="sign head-component-li signin"><Link to="/signin">Вход</Link></li>
                    <li className="sign head-component-li"><Link to="/signup">Регистрация</Link></li>
                </ul>
                <div id="App">
                    <MobileMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
                </div>
            </div>
        )
    }
}

export default Head;
