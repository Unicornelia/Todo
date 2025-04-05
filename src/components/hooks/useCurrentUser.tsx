import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Person } from '../../data/exampleData';

export const useCurrentUser = () => {
  const [user, setUser] = useState<Person | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse = await axios.get('/api/current-user');
        setUser(response.data);
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    })();
  }, []);

  return user;
};
