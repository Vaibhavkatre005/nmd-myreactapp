import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS


const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num2 !== 0 ? num1 / num2 : 'Cannot divide by zero');
        break;
      default:
        setResult('Unknown operation');
    }
  };

  return (
    <div className="calculator" style={{ padding: 20, maxWidth: 300 }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first number"
      />
      <br />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second number"
      />
      <br />
      <div style={{ marginTop: 10 }}>
        <button onClick={() => handleCalculation('+')}>+</button>
        <button onClick={() => handleCalculation('-')}>-</button>
        <button onClick={() => handleCalculation('*')}>*</button>
        <button onClick={() => handleCalculation('/')}>/</button>
      </div>
      <h3>Result: {result !== null ? result : '—'}</h3>
    </div>
  );
};

export default Calculator;
