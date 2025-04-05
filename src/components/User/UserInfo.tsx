import { useResource } from '../hooks/useResource.tsx';
import { Person } from '../../data/exampleData.ts';
import { FC } from 'react';

type UserInfoProps = {
  userId: number;
};

export const UserInfo: FC<UserInfoProps> = ({ userId }: { userId: number }) => {
  const user = useResource(`/api/users/${userId}`);

  if (!user) return <p>Loading...</p>;

  const { name, age, hairColor, hobbies } = user as Person;

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
