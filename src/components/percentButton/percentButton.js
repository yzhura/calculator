import React, { useContext } from 'react';
import { CalculatorContext } from "../calulatorContext";

const PercentButton = () => {

  const { takePercent } = useContext(CalculatorContext);

  return (
    <button className='grey-btn' onClick={takePercent}>%</button>
  )
}

export default PercentButton;