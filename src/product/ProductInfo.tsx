import { FC } from 'react';
import { Product } from '../data/exampleData.ts';

interface ProductInfoProps {
  product?: Product | null | undefined;
}

export const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const { name, price, description, rating } = product ?? {};

  if (!product) return <p>Loading...</p>;

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
