import React, { FC, ReactElement, ReactNode } from 'react';
import { Person } from '../../data/exampleData.ts';

type ControlledOnboardingFlowProps = {
  children: ReactNode[];
  onFinish: (updatedData: Partial<Person>) => void;
  currentIndex: number;
  onNext: (stepData: Partial<Person>) => void;
};

export const ControlledOnboardingFlow: FC<ControlledOnboardingFlowProps> = ({
  children,
  currentIndex,
  onNext,
}) => {
  const goToNext = (stepData: Partial<Person>) => {
    console.log(stepData);
    onNext(stepData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(
      currentChild as ReactElement,
      { goToNext } as { goToNext: () => void },
    );
  }

  return currentChild;
};
