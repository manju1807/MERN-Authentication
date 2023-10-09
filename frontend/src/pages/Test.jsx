import { useState } from 'react';

const center = {
  textAlign: 'center',
  margin: 'auto',
  marginTop: '250px',
};

const btnStyles = {
  backgroundColor: 'violet',
  fontWeight: 'bolder',
  color: 'white',
  margin: '10px',
  padding: '10px 20px',
  borderRadius: '5px',
};

const textStyle = {
  fontSize: '50px',
  padding: '20px',
  verticalAlign: 'middle',
};

const Btn = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={btnStyles}>
      {children}
    </button>
  );
};

const Test = () => {
  const [counter, updateCounter] = useState(0);

  const Increment = () => {
    updateCounter(counter + 1);
  };

  const Decrement = () => {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  };

  const Reset = () => {
    updateCounter(0);
  };

  return (
    <div style={center}>
      <Btn onClick={Decrement}>-</Btn>
      <span style={textStyle}>{counter}</span>
      <Btn onClick={Increment}>+</Btn>
      <Btn onClick={Reset}>Reset</Btn>
    </div>
  );
};

export default Test;
