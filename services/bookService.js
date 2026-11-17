import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() => {
  const books = await bookModel.fetch();
  return books;
}

const doesBookexist = async(book) =>{
  let existing;
  if(Object.hasOwn(book, "id")){
     existing = await bookModel.findBookById(book.id);
  
  } else{
     existing = await bookModel.findBookByNameAndAuthor(book.name, book.author);
    }

  if(existing.length > 0){
    return true;
  }

  return false;
}

export const createBook = async(book) => {  
  if(!book.name || !book.author){
    throw new Error("Name and author are required");
  }

  const existing = await doesBookexist(book);

  if(existing){
    throw new Error("Book already exists");
  }

  const bookId = await bookModel.insert(book);
  return bookId;
}

export const editBook = async (book) => {
  if(!book.name || !book.author){
    throw new Error("Name and author are required");
  }

  const existing = await doesBookexist(book);

  if(!existing){
    throw new Error("Book doesn't exist");
  }


  const updatedBook = await bookModel.update(book.id, book);
  return updatedBook;
}

export const deleteBook = async (id) => {
  const book = { id };

   const existing = await doesBookexist(book);

  if(!existing){
    throw new Error("Book doesn't exist");
  }

  return await bookModel.remove(id);
}