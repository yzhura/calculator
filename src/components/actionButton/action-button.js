import React, { useContext } from 'react';
import { CalculatorContext } from "../calulatorContext";

const ActionButton = ({action}) => {

  const { handleSetAction } = useContext(CalculatorContext);

  return (
    <button className='orange-btn' onClick={() => {handleSetAction(action)}}>{action}</button>
  )
}

export default ActionButton;