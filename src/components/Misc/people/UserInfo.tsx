import { FC } from 'react';
import { Person } from '../../../data/exampleData.ts';

type UserInfoProps = {
  user?: Person | null | undefined;
};

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const { name, age, hairColor, hobbies } = user ?? {};

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>{hobbies && hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}</ul>
    </>
  );
};
