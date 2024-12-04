import ClassComponent from './components/classComponent';
import FuncComponent from './components/funcComponent'
import './App.css';

const numbers = [
  {id: 0, num: 3456},
  {id: 1, num: 5464},
  {id: 2, num: 3476856},
  {id: 3, num: 56787},
  {id: 4, num: 78987}
]

function App() {
  return (
    <div className="App">
      <ClassComponent value={'Я пропс'} />
      <FuncComponent numbers={numbers} />
    </div>
  );
}

export default App;
