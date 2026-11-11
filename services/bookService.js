import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() => {
  const books = await bookModel.fetch();
  return books;
};

export const createBook = async(book) => {
  const bookId = await bookModel.insert(book);
  return bookId;
  
};

export const editBook = async (id, book) => {
  return await bookModel.update(id, book);
};

export const deleteBook = async (id) => {
  return await bookModel.remove(id);
};