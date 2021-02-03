import React, {Component} from 'react';
import './random-person.css';
import Loading from '../loading';

import SwapiService from '../../services/swapi-service'
import ErrorIndicator from "../error-indicator";

export default class RandomPerson extends Component {

    swapiService = new SwapiService();

    state = {
        planet:{},
        loading: true,
        error: false
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) =>{
        this.setState({planet,
        loading: false});
    }

    updatePlanet(){
        const id =Math.floor(Math.random()*25 + 2) ;
        //Math.floor(Math.random()*25 + 2)
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };


    render() {

        const { planet, loading, error } = this.state;
        const hasData = !(loading||error);
        const errorMsg = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Loading /> : null;
        const content = hasData ? <PersonView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMsg}
                {spinner}
                {content}
            </div>

        );
    }
}

const PersonView = ({planet}) => {

    const {id, name, population,
        rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt = "xyq"/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}