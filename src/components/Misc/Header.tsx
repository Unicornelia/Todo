import { FC } from 'react';
import todos from '../../assets/todos.png';

const Header: FC = () => {
  const date = new Date().toDateString();

  return (
    <header>
      <h2>Things to achieve on {date}</h2>
      <img src={todos} height={200} alt="todo icon" />
    </header>
  );
};

export default Header;
