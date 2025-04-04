import { useCallback, useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = useCallback(() => setCount((count) => count + 1), []);

  return <button onClick={incrementCount}>count is {count}</button>;
};

export default CounterButton;
