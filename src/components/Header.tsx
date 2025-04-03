import { FC } from 'react';

const Header: FC = () => {
  const date = new Date().toDateString();

  return (
    <header>
      <h2>Things to achieve on {date}</h2>
    </header>
  );
};

export default Header;
