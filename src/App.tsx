import { FC } from 'react';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import { IStyledComponentBase } from 'styled-components/dist/types';
import './App.css';
import Goals from './components/Goals';
import Header from './components/Header.tsx';
import FallBackError from './components/FallBackError.tsx';

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

const App: FC<Element> = () => {
  return (
    <ErrorBoundary fallback={<FallBackError />}>
      <Container>
        <Header />
        <Goals />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
