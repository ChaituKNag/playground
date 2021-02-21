import React from "react";
import netlifyIdentity from "netlify-identity-widget";

const IdentityContext = React.createContext();

export const IdentityProvider = ({ children }) => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    netlifyIdentity.init();
    const u = netlifyIdentity.currentUser();

    if (u) {
      setUser(u);
    }

    netlifyIdentity.on("login", (u) => setUser(u));
    netlifyIdentity.on("logout", () => setUser(null));

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  const login = () => netlifyIdentity.open("login");
  const signup = () => netlifyIdentity.open("signup");
  const logout = () => netlifyIdentity.logout();
  const loggedIn = () => user !== null;

  return (
    <IdentityContext.Provider value={{ login, signup, user, loggedIn, logout }}>
      {children}
    </IdentityContext.Provider>
  );
};

export const useIdentity = () => React.useContext(IdentityContext);
