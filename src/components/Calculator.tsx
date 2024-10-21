import { useState } from 'react';
import styled from 'styled-components';  // Import styled-components

function Calculator() {
  const [num1, setNum1] = useState<string>(''); 
  const [num2, setNum2] = useState<string>(''); 
  const [result, setResult] = useState<number | null>(null); 

  const calculate = (operation: string) => {
    const number1 = parseFloat(num1);  
    const number2 = parseFloat(num2);  
    let calcResult: number = 0;      

    switch (operation) {
      case '+':
        calcResult = number1 + number2;
        break;
      case '-':
        calcResult = number1 - number2;
        break;
      case '*':
        calcResult = number1 * number2;
        break;
      case '/':
        calcResult = number1 / number2;
        break;
      case '**':
        calcResult = power(number1, number2);
        break;
      default:
        break;
    }

    setResult(calcResult); 
  };

  const power = (base: number, exponent: number) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  };

  const clearInputs = () => {
    setNum1('');  
    setNum2('');  
    setResult(null); 
  };

  return (
    <CalculatorContainer>
      <InputContainer>
        <StyledInput
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)} 
          placeholder="Enter first number"
        />
        <StyledInput
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)} 
          placeholder="Enter second number"
        />
      </InputContainer>

      <ButtonContainer>
        <StyledButton onClick={() => calculate('+')}>+</StyledButton>
        <StyledButton onClick={() => calculate('-')}>-</StyledButton>
        <StyledButton onClick={() => calculate('*')}>*</StyledButton>
        <StyledButton onClick={() => calculate('/')}>/</StyledButton>
        <StyledButton onClick={() => calculate('**')}>^</StyledButton>
        <StyledButton onClick={clearInputs}>Clear</StyledButton>
      </ButtonContainer>

      <ResultOutput result={result}>
        {result !== null ? result : ''}
      </ResultOutput>
    </CalculatorContainer>
  );
}

export default Calculator;

// Styled-components for styling the calculator

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 50px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const ResultOutput = styled.p<{ result: number | null }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ result }) => (result !== null && result < 0 ? 'red' : 'black')};
`;

