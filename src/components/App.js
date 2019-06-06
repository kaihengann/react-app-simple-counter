import React from 'react';
import Counter from './Counter';
import '../styles/App.css';

function App() {
  // each counter should have its own initial count value
  // each counter should have its own unique key
  // index can be used only if array is not push or pop

  const counters = [
    { id: "123", initialCount: 0 },
    { id: "345", initialCount: -10 },
    { id: "234", initialCount: 9 },
    { id: "562", initialCount: 2 }
  ];

  const counterItems = counters.map(counter => {
    return <Counter key={counter.id} count={counter.initialCount} />;
  });

  return <React.Fragment>{counterItems}</React.Fragment>;
}

export default App;
