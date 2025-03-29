import { FC, useState } from 'react';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import { IStyledComponentBase } from 'styled-components/dist/types';
import { Goal } from './components/Goals/types.ts';
import { initialGoals } from './components/Goals/data.ts';
import NewGoal from './components/Goals/NewGoal.tsx';
import GoalList from './components/Goals/GoalList.tsx';
import './App.css';

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
  const [courseGoals, setCourseGoals] = useState(initialGoals);

  const addNewGoalHandler: GoalHandlerFn = (goal: Goal): void => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(goal));
  };

  let date = new Date().toDateString();
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Container>
        <h2>Todo for {date}</h2>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
