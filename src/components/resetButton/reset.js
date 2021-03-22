import React, {useContext} from 'react';
import { CalculatorContext } from "../calulatorContext";

const ResetButtom = () => {

  const { doReset } = useContext(CalculatorContext);

  return (
    <button className='grey-btn' onClick={doReset}>AC</button>
  )
}

export default ResetButtom;