import React from 'react';

import Header from '../header';
import RandomPerson from '../random-person';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
    return (
        <div>
            <Header />
            <RandomPerson />

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
};

export default App;