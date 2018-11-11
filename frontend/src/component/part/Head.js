import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css';

class Head extends Component {
    render() {
        return (
            <div className="container">
                <ul className="main-menu">
                    <li><Link to="/">Женское</Link>
                    <ul className="sub-menu">
                        <li><h1>Заголовок 1</h1>
                        <ul>
                            <li><Link to="/">lol</Link></li>
                            <li><Link to="/">lol</Link></li>
                        </ul>
                        </li>
                        <li><h1>Заголовок 2</h1>
                            <ul>
                                <li><Link to="/">lol</Link></li>
                                <li><Link to="/">lol</Link></li>
                                <li><Link to="/">kek</Link></li>
                            </ul>
                        </li>
                        <li><h1>Заголовок 3</h1>
                            <ul>
                                <li><Link to="/">lol</Link></li>
                                <li><Link to="/">lol</Link></li>
                                <li><Link to="/">kek</Link></li>
                                <li><Link to="/">lol</Link></li>
                                <li><Link to="/">lol</Link></li>
                                <li><Link to="/">kek</Link></li>
                                <li><Link to="/">lol</Link></li>
                                <li><Link to="/">lol</Link></li>
                            </ul>
                        </li>

                                <li className="link-image">
                                    <Link to="/"><img src="https://html5book.ru/wp-content/uploads/2017/01/white-lady.jpg"/></Link>
                                </li>
                            </ul>
                    </li>
                    <li><Link to="/">Мужское</Link>
                        <ul className="sub-menu">
                            <li><h1>Заголовок 1</h1>
                                <ul>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>
                            <li><h1>Заголовок 2</h1>
                                <ul>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">kek</Link></li>
                                </ul>
                            </li>
                            <li><h1>Заголовок 3</h1>
                                <ul>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>

                            <li className="link-image">
                                <Link to="/"><img src="https://html5book.ru/wp-content/uploads/2017/01/white-lady.jpg"/></Link>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/">Детское</Link>
                        <ul className="sub-menu">
                            <li><h1>Заголовок 1</h1>
                                <ul>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>
                            <li className="link-image">
                                <Link to="/"><img src="https://html5book.ru/wp-content/uploads/2017/01/white-lady.jpg"/></Link>
                            </li>
                            <li><h1>Заголовок 2</h1>
                                <ul>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/">Аксессуары</Link>
                        <ul className="sub-menu">
                            <li className="link-image">
                                <Link to="/"><img src="https://html5book.ru/wp-content/uploads/2017/01/white-lady.jpg"/></Link>
                            </li>
                            <li><h1>Заголовок 2</h1>
                                <ul>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                </ul>
                            </li>
                            <li><h1>Заголовок 3</h1>
                                <ul>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">lol</Link></li>
                                    <li><Link to="/">kek</Link></li>
                                    <li><Link to="/">lol</Link></li>

                                </ul>
                            </li>
                            <li><h1>Заголовок 4</h1>
                                <ul>
                                    <li><Link to="/">lol</Link></li>
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
