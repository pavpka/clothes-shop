import React, {Component} from 'react';
import Head from './part/Head'
import HomeCarousel from './part/HomeCarousel';

class Main extends Component {
    render() {
        return (
            <div>
                <Head/>
                <HomeCarousel/>
            </div>
        )
    }
}

export default Main
