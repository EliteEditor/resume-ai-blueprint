import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  name: string;
  email: string;
  // Add other profile fields as needed
}

interface UserContextType {
  userData: UserData;
  setUserData: (data: UserData) => void;
  clearUserData: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initial state could be fetched from localStorage or remain empty
  const [userData, setUserDataState] = useState<UserData>({
    name: '',
    email: '',
  });

  const setUserData = (data: UserData) => {
    setUserDataState(data);
    // Optional: Save to localStorage here for persistence across browser sessions
    // localStorage.setItem('userData', JSON.stringify(data));
  };

  const clearUserData = () => {
    setUserDataState({
      name: '',
      email: '',
    });
    // Optional: Remove from localStorage here
    // localStorage.removeItem('userData');
  };

  // Optional: Load from localStorage on initial mount
  // React.useEffect(() => {
  //   const savedData = localStorage.getItem('userData');
  //   if (savedData) {
  //     setUserDataState(JSON.parse(savedData));
  //   }
  // }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 