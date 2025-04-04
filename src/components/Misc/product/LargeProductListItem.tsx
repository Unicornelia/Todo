import { FC } from 'react';
import { Product } from '../../../data/exampleData.ts';

interface LargeProductListItemProps {
  product: Product;
}

export const LargeProductListItem: FC<LargeProductListItemProps> = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average rating: {rating}</p>
    </>
  );
};
