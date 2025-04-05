import { FC, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import FallBackError from './components/FallBackError.tsx';
import { IStyledComponentBase } from 'styled-components/dist/types';
import styled from 'styled-components';
import { withPropsLogging } from './components/HOC/withPropsLogging.tsx';
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

const WrappedUserInfo = withPropsLogging(UserInfo);

const App: FC<Element> = () => {
  const wrappedRef = useRef(null);
  return (
    <ErrorBoundary fallback={<FallBackError />}>
      <Container>
        <WrappedUserInfo
          user={{ id: 1, name: 'K', age: 10, hairColor: 'red', hobbies: [] }}
          ref={wrappedRef}
        />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
