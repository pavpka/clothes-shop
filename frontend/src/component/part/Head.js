
import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css';
let count=0;
class Head extends Component {
    render() {

        window.onresize =
            function reSize(){
            if (document.body.clientWidth>999)
                document.getElementsByClassName("elements-of-menu")[0].style.display = "flex";
            else document.getElementsByClassName("elements-of-menu")[0].style.display = "none";
            };

        window.onscroll =
        function ScrollPage() {
            const docScroll = window.pageYOffset;
            if (document.body.clientWidth>999) {
                if (docScroll > 40) {
                    document.getElementsByClassName("elements-of-menu")[0].style.position = "fixed";
                    document.getElementsByClassName("elements-of-menu")[0].style.top = "0px";
                }
                else document.getElementsByClassName("elements-of-menu")[0].style.position = "relative";
            }
     };

     function adaptMenu() {
         count++;
         if (document.body.clientWidth < 999) {
             document.getElementsByClassName("elements-of-menu")[0].style.display = "none";

             if (count % 2 === 1) {
                 document.getElementsByClassName("elements-of-menu")[0].style.display = "inline";
             }
             else document.getElementsByClassName("elements-of-menu")[0].style.display = "none"
         }
     }
        return (
            <div className="header">
                <div className="top-line">
                    <h4>Online shop</h4>
                    <div  className="burger">
                        <span><Link onClick={adaptMenu} to="/"  className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"/>
                    </span>
                    </div>
                </div>
                <div className="main-menu">
                <div className="elements-of-menu">
                    <ul className="link-menu">
                    <li>
                        <Link to="/women">Женское</Link>
                        <ul className="drop-down">
                            <li>
                                <h1>Одежда</h1>
                                <ul>
                                    <li><Link to="/">Платья</Link></li>
                                </ul>
                            </li>
                            <li>
                                <h1>Обувь</h1>
                                <ul>
                                    <li><Link to="/">Туфли</Link></li>
                                    <li><Link to="/">Специальные предложения</Link></li>
                                </ul>
                            </li>
                            <li>
                                <h1>lskd</h1>
                                <ul>
                                    <li><Link to="/">Туфли</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                        <li>
                            <Link to="/men">Мужское</Link>
                            <ul className="drop-down">
                                <li>
                                    <h1>Одежда</h1>
                                    <ul>
                                        <li><Link to="/">Платья</Link></li>
                                        <li><Link to="/">Юбки</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h1>Обувь</h1>
                                    <ul>
                                        <li><Link to="/">Туфли</Link></li>
                                        <li><Link to="/">Кроссовки</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/kids">Детское</Link>
                            <ul className="drop-down">
                                <li>
                                    <h1>Одежда</h1>
                                    <ul>
                                        <li><Link to="/">Платья</Link></li>
                                        <li><Link to="/">Юбки</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h1>Обувь</h1>
                                    <ul>
                                        <li><Link to="/">Туфли</Link></li>
                                        <li><Link to="/">Кроссовки</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/accessories">Аксессуары</Link>
                            <ul className="drop-down">
                                <li>
                                    <h1>Одежда</h1>
                                    <ul>
                                        <li><Link to="/">Платья</Link></li>
                                        <li><Link to="/">Юбки</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h1>Обувь</h1>
                                    <ul>
                                        <li><Link to="/">Туфли</Link></li>
                                        <li><Link to="/">Кроссовки</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    <li>
                        <Link to="/lookbook">Lookbook</Link>
                    </li>
                    </ul>


                            <ul className="right-menu">
                                <li>
                            <Link className="glyphicon glyphicon-user" aria-hidden="true" to="/"/>
                                </li>
                                <li>
                            <Link className="glyphicon glyphicon-shopping-cart" aria-hidden="true" to="/"/>
                                </li>
                            </ul>

                </div>
            </div>

            </div>
        )
    }
}



export default Head;
