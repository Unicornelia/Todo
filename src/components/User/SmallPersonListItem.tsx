import { FC } from 'react';
import { Person } from '../../data/exampleData.ts';

type SmallPersonListItemProps = { person: Person };

const SmallPersonListItem: FC<SmallPersonListItemProps> = ({ person }: { person: Person }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
};

export default SmallPersonListItem;
