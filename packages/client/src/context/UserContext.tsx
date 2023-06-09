import { UserItem } from "@happy-tails/shared";
import React, { createContext, useState } from "react";

interface UserContextProps {
  user: UserItem | null;
  setUser: React.Dispatch<React.SetStateAction<UserItem | null>>;
}

const defaultState = {
  user: null,
  setUser: () => {},
};

interface Props {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextProps>(defaultState);

export const UserContextProvider: React.FC<Props> = ({
  children,
  ...props
}) => {
  const [user, setUser] = useState<UserItem | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
