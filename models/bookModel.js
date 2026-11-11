import pool from '../config/db.js';

//read
export const fetch = async () => {
  const [rows] = await pool.query('SELECT * FROM book');
  return rows;
};

// CREATE
export const insert = async (book) => {
    const [result] = await pool.query(
        'INSERT INTO book (name, author) VALUES (?, ?)',
        [book.name, book.author]
    );

    return result.insertId;
};

// UPDATE 
export const update = async (id, book) => {
  const [result] = await pool.query(
    'UPDATE book SET name = ?, author = ? WHERE id = ?',
    [book.name, book.author, id]
  );

  return result.affectedRows;
};

// DELETE 
export const remove = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM book WHERE id = ?',
    [id]
  );

  return result.affectedRows;
};