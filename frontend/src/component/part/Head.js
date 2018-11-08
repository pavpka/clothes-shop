import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css';

class Head extends Component {
    render() {
        return (
            <div className="container">
                <ul className="top-menu">
                    <li><a href="" className="dropdown">Женское</a>
                        <ul className="submenu">
                            <li><h3>Колонка 1</h3>
                                <ul>
                                    <li><Link to="/">LOL</Link></li>
                                    <li><Link to="/">KEK</Link></li>
                                </ul>
                            </li>
                            <li><h3>Колонка 2</h3>
                                <ul>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="link-image">
                                        <Link to="/"/>
                                        <img src="https://html5book.ru/wp-content/uploads/2017/01/white-lady.jpg"/>
                                    </li>
                                    <li><h3 className="image-header">это телка</h3></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="" className="dropdown">Мужское</a>
                        <ul className="submenu">
                            <li><h3>Колонка 1</h3>
                                <ul>
                                    <li><Link to="/">LOL</Link></li>
                                    <li><Link to="/">KEK</Link></li>
                                </ul>
                            </li>
                            <li><h3>Колонка 2</h3>
                                <ul>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="link-image">
                                        <Link to="/"/>
                                        <img src="https://html5book.ru/wp-content/uploads/2017/01/white-lady.jpg"/>
                                    </li>
                                    <li><h3 className="image-header">это все та же телка</h3></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="" className="dropdown">Детское</a>
                        <ul className="submenu">
                            <li><h3>Колонка 1</h3>
                                <ul>
                                    <li><Link to="/">LOL</Link></li>
                                    <li><Link to="/">KEK</Link></li>
                                </ul>
                            </li>
                            <li><h3>Колонка 2</h3>
                                <ul>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="link-image">
                                        <Link to="/"/>
                                        <img src="https://html5book.ru/wp-content/uploads/2017/01/white-lady.jpg"/>
                                    </li>
                                    <li><h3 className="image-header">это все та же телка</h3></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="" className="dropdown">Аксессуары</a>
                        <ul className="submenu">
                            <li><h3>Колонка 1</h3>
                                <ul>
                                    <li><Link to="/">LOL</Link></li>
                                    <li><Link to="/">KEK</Link></li>
                                </ul>
                            </li>
                            <li><h3>Колонка 2</h3>
                                <ul>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="link-image">
                                        <Link to="/"/>
                                        <img src="https://html5book.ru/wp-content/uploads/2017/01/white-lady.jpg"/>
                                    </li>
                                    <li><h3 className="image-header">это все та же телка</h3></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="" className="lookbook">Lookbook</a></li>
                    <li className="sign-head-component-li-signin"><Link to="/signin">Вход</Link></li>
                    <li className="sign-head-component-li"><Link to="/signup">Регистрация</Link></li>
                </ul>
            </div>
        )
    }
}

export default Head;
