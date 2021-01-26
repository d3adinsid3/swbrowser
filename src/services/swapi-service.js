
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
        return res.results;
    }
    getPerson(id){
        return this.getResource(`/people/${id}`);
    }


    async getAllShips(){
        const res = await this.getResource(`/starships/`);
        return res.results;
    }
    getShip(id){
        return this.getResource(`/starships/${id}`);
    }


    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results;
    }
    getPlanet(id){
        return this.getResource(`/planets/${id}`);
    }


}

/*
const swapi = new SwapiService();
swapi.getPerson(3).then((p)=>{
    console.log(p.name);
});
*/
