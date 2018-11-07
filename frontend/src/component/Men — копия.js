import React, {Component} from 'react';
import Head from './part/Head';
import "./css/men.css";
import {Link} from 'react-router';
import HeadVertical from './part/HeadVertical';
import NewClothes from './part/NewClothes'

class Men extends Component{
    render(){
        const men = {
            title: "Одежда",
            links: [
                {
                    link: "shirt",
                    name: "рубашки"
                },
                {
                    link: "t-shirt",
                    name: "футболки"
                },
            ]
        };
        return(
            <div className="men-component">
                <Head/>
                <div className="suit-hyde"><Link to="/"/></div>
                <div className="men-content">
                    <HeadVertical {...men}/>
                    <NewClothes/>
                </div>
            </div>
        )
    }
}

export default Men;
