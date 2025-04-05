import React, { FC, useState, useEffect, ReactNode, ReactElement } from 'react';
import axios from 'axios';
import { Person } from '../../data/exampleData.ts';

type UserLoaderProps = {
  children: ReactNode;
  userId: number;
};

export const UserLoader: FC<UserLoaderProps> = ({ children, userId }: any) => {
  const [user, setUser] = useState<Person | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<Person>(`/api/users/${userId}`);
        setUser(response.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as ReactElement,
            { user } as Partial<{ user: Person | null }>,
          );
        }
        return child;
      })}
    </>
  );
};
