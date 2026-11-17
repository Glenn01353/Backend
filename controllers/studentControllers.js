import * as studentService from '../services/studentService.js';

// READ
export const fetchAllStudents = async (req, res) => {
  try {
    const students = await studentService.fetchAllStudents();
    res.status(200).json(students);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};

// CREATE
export const createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: 'Name and email are required'
      });
    }

    const student = { name, email };
    const studentId = await studentService.createStudent(student);

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      studentId: studentId
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `${error.message || "Internal Server Error"}`
    });
  }
};

// UPDATE
export const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: 'Name and email are required'
      });
    }

    const student = { id, name, email };
    const result = await studentService.editStudent(student);

    if (result === 0) {
      return res.status(404).json({
        error: 'Student not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student updated successfully'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `${error.message || "Internal Server Error"}`
    });
  }
};

// DELETE
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await studentService.deleteStudent(id);

    if (result === 0) {
      return res.status(404).json({
        error: 'Student not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `${error.message || "Internal Server Error"}`
    });
  }
};
