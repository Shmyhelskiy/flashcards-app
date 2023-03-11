import { useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';
import { useDispatch } from 'react-redux';
import {fillArray} from "./store/actionCreators"

function App() {
  const dispatch = useDispatch();
  
useEffect (() => {
    dispatch(fillArray(10))
}, [dispatch])

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
