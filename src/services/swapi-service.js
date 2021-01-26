
export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`net ${url}` + `kok ${res.status}`);
        }

        return await res.json();
    }


    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }
   async getPerson(id){
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }


    async getAllShips(){
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformShip);
    }
    async getShip(id){
        const ship = await this.getResource(`/starships/${id}`);
        return this._transformShip(ship);
    }


    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    _extractId(item){
        const idReg = /\/([0-9]*)\/$/;
        return item.url.match(idReg)[1];
    }
    

    _transformShip (ship){
        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer:  ship.manufacturer,
            length: ship.length,
        }
    }

    _transformPerson (person){
        return {
            id: this._extractId(person),
            name: person.name,
            height: person.height,
            mass:  person.mass,
            hair_color: person.hair_color,
        }
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }


}

/*
const swapi = new SwapiService();
swapi.getPerson(3).then((p)=>{
    console.log(p.name);
});
*/
