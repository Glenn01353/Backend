import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async () => {
  const students = await studentModel.fetch();
  return students;
}

const doesStudentexist = async(student) =>{
  let existing;
  if(Object.hasOwn(student, "id")){
     existing = await studentModel.findStudentById(student.id);
  
  } else{
     existing = await studentModel.findStudentByNameAndEmail(student.name, student.email);
    }

  if(existing.length > 0){
    return true;
  }

  return false;
}

export const createStudent = async(student) => {
  if(!student.name || !student.email){
    throw new Error("Name and email are required");
  }
  const existing = await doesStudentexist(student);

  if(existing){
    throw new Error("Student already exists");
  }

  const studentId = await studentModel.insert(student);
  return studentId;
}

export const editStudent = async (student) => {
  if(!student.name || !student.email){
    throw new Error("Name and email are required");
  }

  const existing = await doesStudentexist(student);

  if(!existing){
    throw new Error("Student doesn't exist");
  }


  const updatedStudent = await studentModel.update(student.id, student);
  return updatedStudent;
}

export const deleteStudent = async (id) => {
  const student = { id };

   const existing = await doesStudentexist(student);

  if(!existing){
    throw new Error("Student doesn't exist");
  }

  return await studentModel.remove(id);
}