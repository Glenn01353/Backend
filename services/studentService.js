import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async () => {
  const students = await studentModel.fetch();
  return students;
};

export const createStudent = async(student) => {
  const studentId = await studentModel.insert(student);
  return studentId;
  
};

export const editStudent = async (id, student) => {
  return await studentModel.update(id, student);
};

export const deleteStudent = async (id) => {
  return await studentModel.remove(id);
};