import logo from "./logo.svg";
import "./App.css";

import { useIdentityContext } from "react-netlify-identity";

function App() {
  const identity = useIdentityContext();
  const handleLogin = () => {
    identity.loginProvider("github");
  };
  const handleLogout = () => {
    identity.logoutUser();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {!identity.isLoggedIn ? (
          <button onClick={handleLogin}>login</button>
        ) : (
          <button onClick={handleLogout}>logout</button>
        )}
        {identity.isLoggedIn
          ? "I am logged in dude"
          : "Nope I am not logged in"}
      </header>
    </div>
  );
}

export default App;
