import { FC, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { IStyledComponentBase } from 'styled-components/dist/types';
import { Goal } from './types.ts';
import { initialGoals } from './components/Goals/data.ts';
import Message from './components/Message.tsx';
import NewGoal from './components/Goals/NewGoal.tsx';
import GoalList from './components/Goals/GoalList.tsx';

const Container: IStyledComponentBase<'web'> = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  overflow-x: hidden;
  background-color: #282c34;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

type GoalHandlerFn = (goal: Goal) => void;

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [courseGoals, setCourseGoals] = useState(initialGoals);

  const addNewGoalHandler: GoalHandlerFn = (goal: Goal): void => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(goal));
  };

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Container>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <Message name={'hm'} message={'no'} />
        <h2>Course goals:</h2>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
