import { useUser } from '../../hooks/useUser.tsx';

export const UserInfo = ({ userId }: { userId: number }) => {
  const user = useUser(userId);

  if (!user) return <p>Loading...</p>;

  const { name, age, hairColor, hobbies } = user;

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
