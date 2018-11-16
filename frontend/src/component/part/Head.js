
import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css';
let count=0;
let skalilngArea;
let icon="glyphicon glyphicon-menu-hamburger";
class Head extends Component {
    render() {

        window.onresize =
            function reSize(){
            if (document.body.clientWidth>=1000) {
                document.getElementsByClassName("elements-of-menu")[0].style.display = "flex";
                skalilngArea=0;

            }
            else {
                if (count % 2 === 1) {
                    document.getElementsByClassName("elements-of-menu")[0].style.display = "inline";
                    icon="glyphicon glyphicon-remove";
                }

                else {
                    document.getElementsByClassName("elements-of-menu")[0].style.display = "none";
                    icon = "glyphicon glyphicon-menu-hamburger";
                }
            }

            };

        window.onscroll =
        function ScrollPage() {
            const docScroll = window.pageYOffset;
            if (document.body.clientWidth>=1000) {
                if (docScroll > 40) {
                    document.getElementsByClassName("elements-of-menu")[0].style.position = "fixed";
                    document.getElementsByClassName("elements-of-menu")[0].style.top = "0px";
                }
                else document.getElementsByClassName("elements-of-menu")[0].style.position = "relative";
            }
     };

     function adaptMenu() {
         count++;
         if (document.body.clientWidth < 1000) {
             document.getElementsByClassName("elements-of-menu")[0].style.display = "none";

             if (count % 2 === 1) {
                 document.getElementsByClassName("elements-of-menu")[0].style.display = "inline";
                 icon="glyphicon glyphicon-remove";
             }

             else {
                 document.getElementsByClassName("elements-of-menu")[0].style.display = "none";
                 icon = "glyphicon glyphicon-menu-hamburger";
             }

         }
     }
        return (
            <div className="header">
                <div className="top-line">
                    <h4><Link to="/">Online shop</Link></h4>
                    <div  className="burger">
                        <span><Link onClick={adaptMenu} to="/"  className={icon} aria-hidden="true"/>
                    </span>
                    </div>
                </div>
                <div className="main-menu">
                <div className="elements-of-menu">
                    <ul className="link-menu">
                    <li>
                        <Link to="/women">Женское</Link>
                        <ul className="drop-down">
                            <li id="drop-menu">
                                <h1>Одежда</h1>
                                <ul>
                                    <li><Link to="/">Верхняя одежда</Link></li>
                                    <li><Link to="/">Платья</Link></li>
                                    <li><Link to="/">Блузки и рубашки</Link></li>
                                    <li><Link to="/">Футболки и топы</Link></li>
                                    <li><Link to="/">Джемперы и свитеры</Link></li>
                                    <li><Link to="/">Брюки</Link></li>
                                    <li><Link to="/">Пиджаки и кардиганы</Link></li>
                                    <li><Link to="/">Юбки</Link></li>
                                </ul>
                            </li>
                            <li>
                                <h1>Обувь</h1>
                                <ul>
                                    <li><Link to="/">Туфли</Link></li>
                                    <li><Link to="/">Кроссовки</Link></li>
                                    <li><Link to="/">Ботинки</Link></li>
                                    <li><Link to="/">Сапоги</Link></li>
                                </ul>
                            </li>
                            <li>
                                <h1>Другое</h1>
                                <ul>
                                    <li><Link to="/">Новая коллекция</Link></li>
                                    <li><Link to="/">Специальные предложения</Link></li>

                                </ul>
                            </li>
                        </ul>
                    </li>
                        <li>
                            <Link to="/men">Мужское</Link>
                            <ul className="drop-down">
                                <li id="drop-menu">
                                    <h1>Одежда</h1>
                                    <ul>
                                        <li><Link to="/">Верхняя одежда</Link></li>
                                        <li><Link to="/">Рубашки</Link></li>
                                        <li><Link to="/">Футболки</Link></li>
                                        <li><Link to="/">Костюмы</Link></li>
                                        <li><Link to="/">Джемперы и свитеры</Link></li>
                                        <li><Link to="/">Брюки</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h1>Обувь</h1>
                                    <ul>
                                        <li><Link to="/">Кроссовки</Link></li>
                                        <li><Link to="/">Кеды</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h1>Другое</h1>
                                    <ul>
                                        <li><Link to="/">Новая коллекция</Link></li>
                                        <li><Link to="/">Специальные предложения</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/kids">Детское</Link>
                            <ul className="drop-down">
                                <li id="drop-menu">
                                    <h1>Категория</h1>
                                    <ul>
                                        <li><Link to="/">Малыши 1 мес - 2 года</Link></li>
                                        <li><Link to="/">Девочки 2 - 5 лет</Link></li>
                                        <li><Link to="/">Мальчики 2 - 5 лет</Link></li>
                                        <li><Link to="/">Девочки 5 - 10 лет</Link></li>
                                        <li><Link to="/">Мальчики 5 - 10 лет</Link></li>
                                        <li><Link to="/">Девочки 10 - 14 лет</Link></li>
                                        <li><Link to="/">Мальчики 10 - 14 лет</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h1>Другое</h1>
                                    <ul>
                                        <li><Link to="/">Специальные предложения</Link></li>
                                        <li><Link to="/">Детские аксессуары</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/accessories">Аксессуары</Link>
                            <ul className="drop-down">
                                <li>
                                    <h1>Женские</h1>
                                    <ul>
                                        <li><Link to="/">Сумки</Link></li>
                                        <li><Link to="/">Шапки и шарфы</Link></li>
                                        <li><Link to="/">Бижутерия</Link></li>
                                        <li><Link to="/">Перчатки</Link></li>
                                        <li><Link to="/">Для телефона</Link></li>
                                        <li><Link to="/">Для волос</Link></li>
                                        <li><Link to="/">Очки</Link></li>
                                        <li><Link to="/">Носки и колготки</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h1>Мужские</h1>
                                    <ul>
                                        <li><Link to="/">Шапки и шарфы</Link></li>
                                        <li><Link to="/">Очки</Link></li>
                                        <li><Link to="/">Рюкзаки</Link></li>
                                        <li><Link to="/">Ремни</Link></li>
                                        <li><Link to="/">Перчатки и варежки</Link></li>
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
