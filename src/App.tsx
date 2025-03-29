import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import { IStyledComponentBase } from 'styled-components/dist/types';
import { Goal } from './components/Goals/types.ts';
import { initialGoals } from './components/Goals/data.ts';
import Message from './components/Message.tsx';
import NewGoal from './components/Goals/NewGoal.tsx';
import GoalList from './components/Goals/GoalList.tsx';
import UserContext from './context/UserContext.tsx';

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
  const [userName, setUserName] = useState<string>('User');
  const [message, setMessage] = useState<string>('Message');

  const addNewGoalHandler: GoalHandlerFn = (goal: Goal): void => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(goal));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // update state after 5 sec
      setUserName('Kori');
      setMessage('Goodbye');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  let date = new Date().toDateString();
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <UserContext.Provider value={{ userName: userName, message: message }}>
        <Container>
          <h2>Todo for {date}</h2>
          <NewGoal onAddGoal={addNewGoalHandler} />
          <GoalList goals={courseGoals} />
          <Message />
        </Container>
      </UserContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
