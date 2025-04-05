import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Person } from '../../data/exampleData';

export const useUser = (id: number) => {
  const [user, setUser] = useState<Person | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse = await axios.get(`/api/users/${id}`);
        setUser(response.data);
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    })();
  }, [id]);

  return user;
};
