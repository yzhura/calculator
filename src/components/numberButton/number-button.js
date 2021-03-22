import React, { useContext } from 'react';
import { CalculatorContext } from "../calulatorContext";

const NumberButton = ({number, addClass}) => {

  const { handleSetNumber } = useContext(CalculatorContext);

  return (
    <button className={`dark-grey-btn ${addClass}`} onClick={() => {handleSetNumber(number)}}>{number}</button>
  )
}

export default NumberButton;