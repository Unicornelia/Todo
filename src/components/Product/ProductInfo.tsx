import { FC } from 'react';
import { Product } from '../../data/exampleData.ts';
import { useResource } from '../hooks/useResource.tsx';

interface ProductInfoProps {
  id: number;
}

export const ProductInfo: FC<ProductInfoProps> = ({ id }: { id: number }) => {
  const product = useResource(`/api/products/${id}`);

  if (!product) return <p>Loading...</p>;

  const { name, price, description, rating } = product as Product;

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
