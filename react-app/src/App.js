
import './App.css';
import {animals} from './components/Animal';

function App() {
  return (
    <div className="App">
      {
        animals.map((animal, key)=>{
          return <div class="animal">
             <h1 class="animal-name">{animal.name}</h1> {(animal.isMammal == true) ? <h3 class="isMammal">is Mammal</h3> : <h3 class="is-not-Mammal">isn't Mammal</h3>}
          </div>
        })
      }
      

      
    </div>
  );
}

export default App;
