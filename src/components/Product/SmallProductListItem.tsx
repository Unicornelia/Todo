import { FC } from 'react';

export const SmallProductListItem: FC = ({ product }: any) => {
  const { name, price } = product;
  return (
    <h3>
      {name} - {price}
    </h3>
  );
};
