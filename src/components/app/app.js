import React, { Component } from 'react';

import Header from '../header';
import RandomPerson from '../random-person';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showButton: false,
        };
    }

    toggleRandomPlanet = () => {
        this.setState({show: !this.state.show});
    };

    render() {

        const {show} = this.state;

    return (
        <div>
            <Header />


            <button onClick={() => this.toggleRandomPlanet()}>123</button>
            {show ? <RandomPerson/> : null}



            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
);
}
}
