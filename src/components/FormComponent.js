import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, InputField} from '../styled';

//
import { getStock } from '../actions/stockActions';

 


const FormComponent = () => {
  const dispatch = useDispatch();
  const [ticker, setTicker] = useState('');



  const handleInputChange = (e) => {
    setTicker((e.target.value).toUpperCase().trim());
    // console.log("value ", value ); 
  }

  const handleSearchClick = (e) => {
    e.preventDefault();
    dispatch(getStock(ticker));
  }



  return (
    <div className="search-bar">
      <div className='input-div'>
        <InputField
          type="text"
          placeholder="Stock Ticker"
          value={ticker}
          onChange={handleInputChange}
        />
      </div>
      <div className='button-div'>
        <Button
          type="button"
          onClick={handleSearchClick}
          disabled={(ticker.length === 0)}
        >
          Search
    </Button>
      </div>
    </div>
  )
}

export default FormComponent
