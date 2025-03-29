import { createContext } from 'react';

interface UserContextType {
  userName: string;
  message: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
