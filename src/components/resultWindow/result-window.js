import React, { useContext } from 'react';
import { CalculatorContext } from "../calulatorContext";

const ResultWindow = () => {

  const { error, number , storageNumber } = useContext(CalculatorContext);

  return (
    <div className='result-wrap'>{error || number || storageNumber}</div>
  )
}

export default ResultWindow;