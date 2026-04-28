import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MarkAttendance from "./pages/MarkAttendance";
import Records from "./pages/Records";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={!token ? <Login /> : <Navigate to="/dashboard" />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />

        {/* OTHER PAGES */}
        <Route path="/mark" element={token ? <MarkAttendance /> : <Navigate to="/" />} />
        <Route path="/records" element={token ? <Records /> : <Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;