import React, {Component} from 'react';
import Head from './part/Head';
import {Link} from 'react-router';
import ListOfClothes from './part/ListOfClothes';

class Woman extends Component{
    render(){
        const woman = {

        };
        return(
            <div>
                <Head/>
                <ListOfClothes/>
            </div>
        )
    }
}
export default Woman;
