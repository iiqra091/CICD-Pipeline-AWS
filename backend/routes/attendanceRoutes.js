const router = require("express").Router();
const { markAttendance, getAttendance } = require("../controllers/attendanceController");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.json([
    { date: new Date(), status: "Present" },
    { date: new Date(), status: "Absent" }
  ]);
});

module.exports = router;