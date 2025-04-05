import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Person, Product } from '../../data/exampleData';

export const useResource = (resourceUrl: string) => {
  const [resource, setResource] = useState<Person | Product | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<Person | Product> = await axios.get(resourceUrl);
        setResource(response.data);
      } catch (err) {
        console.error('Failed to fetch resource:', err);
      }
    })();
  }, [resourceUrl]);

  return resource;
};
