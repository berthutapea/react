import React from 'react';
import { createRoot } from 'react-dom/client';

function CounterDisplay({ count }) {
  if (count === 0) {
    return <p>{count}</p>;
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  }

  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }

  if (count % 7 === 0) {
    return <p>Buzz</p>;
  }

  return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
    return (
      <div>
        <button onClick={increase}>+ increase</button>
      </div>
    );
  }