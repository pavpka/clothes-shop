import React, {Component} from 'react';
import Head from './part/Head'
import HomeCarousel from './part/HomeCarousel';
import './css/main.css';

class Main extends Component {
    render() {
        const carouselProps = {
            width: 1920,
            height: 1080,
            isCaptionExist: true,
            pictures: [
                {
                    src: "https://staticpages.mngbcn.com/homes/images/fw18/he/septiembre/newnow_he_septiembre_2_3_large.jpg?imwidth=1366&imdensity=1",
                    title: "lol",
                    price: "kek",
                },
                {
                    src: "https://wallbox.ru/resize/1920x1080/wallpapers/main/201424/93f059e7674a152.jpg",
                    title: "lol",
                    price: "kek",
                }
            ],
        };
        return (
            <div className="main-component">
                <Head/>
                <HomeCarousel  {...carouselProps}/>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>
                <div>где-то здесь подвал</div>


            </div>
        )
    }
}

export default Main
