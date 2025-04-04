import { ReactNode } from 'react';

export const createArray = (length: number): ReactNode[] => {
  return [...Array(length)];
};
