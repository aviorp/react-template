import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

// type definition for the context
type UserDataI = { initialized: boolean; loggedIn: boolean; user: any };

export type AuthContextI = {
  authInfo: UserDataI | undefined;
  initialize: () => Promise<boolean>;
  logOut: () => Promise<boolean>;
  logIn: () => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextI | any>({});

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [authInfo, setAuthInfo] = useState<UserDataI>({
    initialized: false,
    loggedIn: false,
    user: null
  });

  const navigate = useNavigate();

  const initialize = () => {
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
    setAuthInfo({
      initialized: true,
      loggedIn: false,
      user: {
        name: "Paul Doe",
        email: "pauldoe@example.com"
      }
    });
  };
  const logIn = async () => {
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
      navigate("/");
    }, 1500);
  };
  const logOut = async () => {
    setAuthInfo({
      initialized: true,
      loggedIn: false,
      user: null
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
