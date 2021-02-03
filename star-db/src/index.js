import ReactDOM from 'react-dom';

import App from './components/app/';
import SwapiService from './services/swapi-service';


const swapi = new SwapiService();

swapi.getAllPeople().then(people => {
  people.forEach(p => {
    console.log(p.name);
  })
})

swapi.getPerson(3).then(p => {
  console.log(p.name);
})

ReactDOM.render(<App />, document.getElementById('root'));

