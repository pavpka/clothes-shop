import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import axios from 'axios';

class ListOfClothes extends Component {
    constructor(props){
        super(props);
        this.dataLoad = this.dataLoad.bind(this);
    }

    componentDidMount(){
        this.dataLoad();
    }

    dataLoad(){
        axios.get('/clothes/type?name=%D0%B1%D0%BB%D1%83%D0%B7%D0%BA%D0%B8%20%D0%B8%20%D1%80%D1%83%D0%B1%D0%B0%D1%88%D0%BA%D0%B8')
            .then(res => {
                this.props.onAddClothes(res.data);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="list-of-clothes-component">
                <ul>
                    {this.props.clothes.map((data) =>
                        <li key={data.id}>
                            <h1>{data.name}</h1>
                            <img src={data.refImg} height="50px"/>
                            <h1>{data.price}</h1>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        clothes: state.clothes,
    }),
    dispatch => ({
        onAddClothes: (clothes) => {
            dispatch({type: 'ADD_NEW_TYPE', payload: clothes})
        },
    })
)(ListOfClothes);
