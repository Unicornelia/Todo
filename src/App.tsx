import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import FallBackError from './components/FallBackError.tsx';
import { IStyledComponentBase } from 'styled-components/dist/types';
import styled from 'styled-components';
import { UserInfo } from './components/Misc/people/UserInfo.tsx';

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

function App() {
  return (
    <ErrorBoundary fallback={<FallBackError />}>
      <Container>
        <UserInfo userId={1} />
        <UserInfo userId={2} />
        <UserInfo userId={3} />
      </Container>
    </ErrorBoundary>
  );
}

export default App;
