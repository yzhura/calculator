import React, { useContext } from 'react';
import { CalculatorContext } from "../calulatorContext";

const ResultButton = () => {

  const { calcResult } = useContext(CalculatorContext);

  return (
    <button className='orange-btn' onClick={() => {calcResult()}}>=</button>
  )
}

export default ResultButton;