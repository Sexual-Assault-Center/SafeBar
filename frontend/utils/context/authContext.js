import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { signInUser, signOutUser } from '../auth';
import { firebase } from '../clientFB';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (fbUser) => {
      if (fbUser) {
        setUser(fbUser);
      } else {
        setUser(false);
      }
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      signOutUser,
      signInUser,
      userLoading: user === null,
    }),
    [user],
  );

  return <AuthContext.Provider value={value} {...props} />;
};
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
