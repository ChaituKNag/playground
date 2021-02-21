import "./App.css";
import { useIdentity } from "./identity";

function App() {
  const { login, user, logout, loggedIn } = useIdentity();
  const handleLogin = () => {
    login();
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome {user?.user_metadata?.full_name || "there"}</p>

        {loggedIn() ? (
          <button onClick={handleLogout}>logout</button>
        ) : (
          <button onClick={handleLogin}>login</button>
        )}
      </header>
    </div>
  );
}

export default App;
