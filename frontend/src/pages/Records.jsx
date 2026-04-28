import { useEffect, useState } from "react";
import API from "../api/api";

export default function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/attendance", {
          headers: { Authorization: token }
        });

        // ✅ SAFE SET
        setRecords(Array.isArray(res.data) ? res.data : []);

      } catch (err) {
        console.log(err);
        setRecords([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Attendance Records</h3>

      {Array.isArray(records) && records.length > 0 ? (
        records.map((r, i) => (
          <p key={i}>
            {new Date(r.date).toLocaleDateString()} - {r.status}
          </p>
        ))
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
}