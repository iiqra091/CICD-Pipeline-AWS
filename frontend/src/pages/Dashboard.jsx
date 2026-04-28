import MarkAttendance from "./MarkAttendance";
import Records from "./Records";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={() => navigate("/mark")}>
        Mark Attendance
      </button>

      <button onClick={() => navigate("/records")}>
        View Records
      </button>

      <button onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }}>
        Logout
      </button>
    </div>
  );
}