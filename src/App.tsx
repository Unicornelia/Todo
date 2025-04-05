import { FC, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import FallBackError from './components/FallBackError.tsx';
import { IStyledComponentBase } from 'styled-components/dist/types';
import styled from 'styled-components';
import { ControlledModal } from './components/Modal/ControlledModal.tsx';

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
  const [shouldShowModal, setShouldShowModal] = useState(false);

  let toggleModal = () => setShouldShowModal((prevState) => !prevState);
  return (
    <ErrorBoundary fallback={<FallBackError />}>
      <Container>
        <ControlledModal shouldShow={shouldShowModal} onToggle={toggleModal}>
          <h1>Hi there</h1>
        </ControlledModal>
        <button onClick={toggleModal}>{shouldShowModal ? 'Hide' : 'Reveal'}</button>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
