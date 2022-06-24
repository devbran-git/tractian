import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';
import { User } from '../types/user';

interface UsersContextProps {
  users: User[];
}

interface UsersProviderProps {
  children: ReactNode;
}

const UsersContext = createContext({} as UsersContextProps);

const UsersContextProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUnitUsers = async () => {
    const usersResponse = await api.get('users');
    const usersData = usersResponse.data;

    setUsers(usersData);
  };

  useEffect(() => {
    fetchUnitUsers();
  }, []);
  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};

const useUsers = () => {
  const context = useContext(UsersContext);
  return context;
};

export { UsersContextProvider, useUsers };
