import React, { FC, ReactElement, ReactNode, useState } from 'react';
import { Person } from '../../data/exampleData.ts';

type UncontrolledOnboardingFlowProps = {
  children: ReactNode[];
  onFinish: (updatedData: Partial<Person>) => void;
};

export const UncontrolledOnboardingFlow: FC<UncontrolledOnboardingFlowProps> = ({
  onFinish,
  children,
}) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = (stepData: Partial<Person>) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    if (nextIndex < children?.length) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      onFinish(updatedData);
    }

    setOnboardingData(updatedData);
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
