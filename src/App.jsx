import './App.css';
import {Antra, Ketvirta, Penkta, Pirma, Trecia} from './Components/Base-list/react-base';
import {DogsCapi, DogsColor, DogsInCircle, DogsInFigures, DogsInSquare} from './Components/Base-list/react-base-list';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      {/*Base*/}

      <Pirma />

      <Antra tekstas="Antra uzduotis"/>

      <Trecia number= {1} />

      <Ketvirta tekstas1 = "Hello" tekstas2 ="world" />

      <Penkta tekstas1 = "Hello" tekstas2 ="world" spalva="green"/>
      {/*Base-list*/}

      {/* <DogsInSquare />
   
      <DogsInCircle />

      <DogsInFigures />

      <DogsCapi />

      <DogsColor /> */}
      </header>
    </div>
  );
}

export default App;