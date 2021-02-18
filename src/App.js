import React , { useState } from 'react';

const App = () =>{
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(prevCount => prevCount +1);
  const decrement2 = () => setCount(prevCount => prevCount -1);

  const resetCount = () => setCount(0); 

  const double = () => setCount(prevCount => prevCount * 2);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <hr />
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <hr />
      <button onClick={resetCount}>Reset</button>
      <hr />
      <button onClick={double}>×2</button>
    </div>
  );
}

export default App;