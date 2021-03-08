import React  from 'react'
import { useSelector } from 'react-redux';
import Form from './components/FormComponent'
import Results from './components/ResultComponent'


import './App.css';

const App = () => { 
  const { loading, stock, error } = useSelector(state => state.stock)
 
 
  return (
    <div className="App">
        <Form /> 
        <Results />
    </div>);

}

export default App;
