import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import FallBackError from './components/FallBackError.tsx';
import { IStyledComponentBase } from 'styled-components/dist/types';
import styled from 'styled-components';

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
  color: chartreuse;
`;

const App: FC<Element> = () => {
  return (
    <ErrorBoundary fallback={<FallBackError />}>
      <Container></Container>
    </ErrorBoundary>
  );
};

export default App;
