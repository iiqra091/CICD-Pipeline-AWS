import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      setToken(stored);
    }
  }, []);

  return (
    <>
      {token ? <Dashboard /> : <Login />}
    </>
  );
}

export default App;