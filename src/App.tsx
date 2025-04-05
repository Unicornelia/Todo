import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import FallBackError from './components/FallBackError.tsx';
import { IStyledComponentBase } from 'styled-components/dist/types';
import styled from 'styled-components';
import { UncontrolledOnboardingFlow } from './components/OnboardingFlow/UncontrolledOnboardingFlow.tsx';
import { Person } from './data/exampleData.ts';
import { NextButton } from './components/OnboardingFlow/NextButton.tsx';

type goToNextFn = { goToNext?: (p: Partial<Person>) => void };

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

const StepOne = ({ goToNext }: goToNextFn) => {
  return (
    goToNext && (
      <>
        <NextButton onNextClick={() => goToNext({ name: 'Jane Doe' })} />
        <h1>Step 1</h1>
      </>
    )
  );
};

const StepTwo = ({ goToNext }: goToNextFn) => {
  return (
    goToNext && (
      <>
        <NextButton onNextClick={() => goToNext({ age: 100 })} />
        <h1>Step 2</h1>
      </>
    )
  );
};

const StepThree = ({ goToNext }: goToNextFn) => {
  return (
    goToNext && (
      <>
        <NextButton onNextClick={() => goToNext({ hairColor: 'brown' })} />
        <h1>Step 3</h1>
      </>
    )
  );
};

const App: FC<Element> = () => {
  return (
    <ErrorBoundary fallback={<FallBackError />}>
      <Container>
        <UncontrolledOnboardingFlow
          onFinish={(data) => {
            console.log(data);
            alert('Onboarding complete');
          }}
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </UncontrolledOnboardingFlow>
      </Container>
    </ErrorBoundary>
  );
};

export default App;
