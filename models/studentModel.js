import pool from '../config/db.js';

//READ
export const fetch = async () => {
  const [rows] = await pool.query('SELECT * FROM student');
  return rows;
};

// CREATE
export const insert = async (student) => {
    const [result] = await pool.query(
        'INSERT INTO student (name, email) VALUES (?, ?)',
        [student.name, student.email]
    );

    return result.insertId;
};

// UPDATE 
export const update = async (id, student) => {
  const [result] = await pool.query(
    'UPDATE student SET name = ?, email = ? WHERE id = ?',
    [student.name, student.email, id]
  );

  return result.affectedRows;
};

// DELETE 
export const remove = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM student WHERE id = ?',
    [id]
  );

  return result.affectedRows;
};