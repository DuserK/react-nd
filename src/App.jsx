import './App.scss';
import {Antra, Ketvirta, Penkta, Pirma, Trecia} from './Components/Base-list/react-base';
import {DogsCapi, DogsColor, DogsInCircle, DogsInFigures, DogsInSquare} from './Components/Base-list/react-base-list';
import State01 from './Components/State/State01';
import State02 from './Components/State/State02';
import State03 from './Components/State/State03';
import State04 from './Components/State/State04';
import State05 from './Components/State/State05';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/*State*/}

      {/* <State01 /> */}
      {/* <State02 /> */}
      <State03 />
      {/* <State04 /> */}
      {/* <State05 /> */}


      {/*Base*/}

      {/* <Pirma />

      <Antra tekstas="Antra uzduotis"/>

      <Trecia number= {1} />

      <Ketvirta tekstas1 = "Hello" tekstas2 ="world" />

      <Penkta tekstas1 = "Hello" tekstas2 ="world" spalva="green"/> */}
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
