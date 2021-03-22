import React, { useState } from 'react';

const CalculatorContext = React.createContext();

const CalculatorProvider = (props) => {
  const [number, setNumber] = useState('0');
  const [storageNumber, setStorageNumber] = useState('');
  const [actionType, setActionType] = useState('');
  const [error, setError] = useState('')

  const handleSetNumber = (newNumber) => {
    setError('');
    if(newNumber === ',') {
      newNumber = '.';
    }
    if((!number || number === '0') && newNumber === '.') {
      setNumber('0.');
      return;
    }
    if(newNumber === '0' && number === '0') {
      return
    }
    if(number.length >= 9) {
      return;
    }
    if(number === '0') {
      setNumber(newNumber);
      return;
    }
    if(actionType && number) {
      setNumber(number + newNumber);
      return;
    }
    setNumber(number + newNumber);
  }

  const handleSetAction = (action) => {
    if(actionType) {
      calcResult();
      setNumber('');
    }
    setActionType(action);
    if(storageNumber && actionType) {
      return
    }
    setNumber('');
    setStorageNumber(number);
  }

  const doReset = () => {
    setNumber('0');
    setStorageNumber('')
  }

  const takePercent = () => {
    if(number === '0') {
      return
    }
    if(!storageNumber) {
      setNumber(+number / 100)
    } else if(!number) {
      setStorageNumber(+storageNumber / 100);
    } else {
      setNumber((+number / 100) * storageNumber);
    }
  }

  const reverseNumber = () => {
    let oldNumber = number || storageNumber;
    if(oldNumber === '0') {
      return;
    }
    let newNumber;
    if(oldNumber.includes("-", 0)) {
      newNumber = oldNumber.slice(1);
    } else {
      newNumber = '-' + oldNumber;
    }
    number ? setNumber(newNumber) : setStorageNumber(newNumber);
  }

  const calcResult = () => {
    let res;
    if (number && storageNumber) {
      switch (actionType) {
        case '+':
          res = `${Math.round(`${(parseFloat(storageNumber) + parseFloat(number)) * 100}`) / 100}`;
          break;
        case '-':
          res = `${Math.round(`${(parseFloat(storageNumber) - parseFloat(number)) * 1000}`) / 1000}`;
          break;
        case '/':
          res = `${Math.round(`${(parseFloat(storageNumber) / parseFloat(number)) * 1000}`) / 1000}`;
          break;
        case 'x':
          res = `${Math.round(`${parseFloat(storageNumber) * parseFloat(number) * 1000}`) / 1000}`;
          break;
        default:
          break;
      };
      if (res === 'Infinity' || res === 'NaN') {
        setStorageNumber('');
        setError('Ошибка!')
      } else {
        setStorageNumber(res)
      }
      setNumber('');
    }
  };


  return (
    <CalculatorContext.Provider
      value={{
        error,
        number,
        storageNumber,
        takePercent,
        handleSetNumber,
        handleSetAction,
        calcResult,
        doReset,
        reverseNumber
      }}>
      {props.children}
    </CalculatorContext.Provider>
  )
}

export { CalculatorContext };

export default CalculatorProvider;