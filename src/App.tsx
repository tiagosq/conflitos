import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementar}>Inc</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default App;
