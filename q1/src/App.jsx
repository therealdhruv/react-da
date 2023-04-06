import { useState } from 'react'
import './App.css'

function App() {

    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");
  
    const handleChangeFirstNumber = (event) => {
      setFirstNumber(event.target.value);
    };
  
    const handleChangeSecondNumber = (event) => {
      setSecondNumber(event.target.value);
    };
  
    const handleChangeOperation = (event) => {
      setOperation(event.target.value);
    };
  
    const handleCalculate = () => {
      const firstNumberValue = +firstNumber;
      const secondNumberValue = +secondNumber;
  
      switch (operation) {
        case "+":
          setResult(firstNumberValue + secondNumberValue);
          break;
        case "-":
          setResult(firstNumberValue - secondNumberValue);
          break;
        case "*":
          setResult(firstNumberValue * secondNumberValue);
          break;
        case "/":
          setResult(firstNumberValue / secondNumberValue);
          break;
      }
    };

  return (
    <>
      <h1>Calculator</h1>
      <input
        type="number"
        placeholder="First Number"
        value={firstNumber}
        onChange={handleChangeFirstNumber}
      />
      <input
        type="number"
        placeholder="Second Number"
        value={secondNumber}
        onChange={handleChangeSecondNumber}
      />
      <select value={operation} onChange={handleChangeOperation}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      <h2>Result: {result}</h2>
    </>
  )
}

export default App
