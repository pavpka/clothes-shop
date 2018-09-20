import React, {Component} from 'react';
import Head from './part/Head'
import HomeCarousel from './part/HomeCarousel';
import './css/main.css';
import TextCarousel from './part/TextCarousel';

class Main extends Component {
    render() {
        const carouselProps = {
            width: 1920,
            height: 1080,
            isCaptionExist: true,
            pictures: [
                {
                    src: "http://wallpapercave.net/images/romantic-wallpaper-hd/romantic-wallpaper-hd-2.jpg",
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
            <div>
                <Head/>
                <HomeCarousel {...carouselProps}/>
                <div className="suits">
                    <HomeCarousel className="suits" {...carouselProps}/>
                </div>
                <div>lol</div>
                <TextCarousel/>
            </div>
        )
    }
}

export default Main
