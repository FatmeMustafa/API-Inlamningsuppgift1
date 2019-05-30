const express = require('express');
const router = express.Router();

const student = require('./student.js');

router.post("/students", student.addStudent);
router.get("/students", student.getStudent);

router.get("/students/:id", student.getStudentId);
router.delete("/students/:id", student.deleteStudentId);
router.put("/students/:id", student.updateStudentId);

module.exports = router