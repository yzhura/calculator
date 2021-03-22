import React, {useContext} from 'react';
import {CalculatorContext} from "../calulatorContext";

const ReverseButton = () => {

  const { reverseNumber } = useContext(CalculatorContext);

  return (
    <button className='grey-btn' onClick={reverseNumber}>+/-</button>
  )
}

export default ReverseButton;