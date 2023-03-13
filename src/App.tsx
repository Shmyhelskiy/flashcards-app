import { useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {fillArray} from "./store/actionCreators"

function App() {
  const dispatch = useDispatch();
  const data: NumbersState = useSelector(state => state as NumbersState )
useEffect (() => {
    dispatch(fillArray(10))
}, [dispatch])

console.log(data);

  return (
    <div className="App">
      <div className="wrapper">
        <div>
          <span>Score: </span>
          {data.score}
        </div>
        <div>
          <span>Attempts: </span>
          {data.attempts}
        </div>
      </div>
      <Card />
    </div>
  );
}

export default App;
