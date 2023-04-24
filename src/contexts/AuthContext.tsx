import { createContext, ReactNode, useState } from "react";

// type definition for the context
type UserDataInterface = { initialized: boolean; loggedIn: boolean; user: any };

type MyContextInterface = {
  authInfo: UserDataInterface;
  initialize: () => Promise<boolean>;
  logOut: () => Promise<boolean>;
  logIn: () => Promise<boolean>;
};

export const AuthContext = createContext<MyContextInterface | any>({});

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [authInfo, setAuthInfo] = useState<UserDataInterface>();

  const initialize = async () => {
    const token: string = localStorage.token;
    if (token) {
      setAuthInfo({
        initialized: true,
        loggedIn: true,
        // decode the token and get the user info
        user: {
          name: "John Doe",
          email: ""
        }
      });
    }
  };
  const logIn = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setAuthInfo({
          initialized: true,
          loggedIn: true,
          user: {
            name: "John Doe",
            email: ""
          }
        });

        localStorage.token = {
          name: "John Doe"
        };
        resolve(true);
      }, 3000);
    });
  };
  const logOut = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setAuthInfo({
          initialized: true,
          loggedIn: false,
          user: null
        });
        resolve(true);
      }, 3000);
    });
  };

  const contextValue = {
    authInfo,
    initialize,
    logIn,
    logOut
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
