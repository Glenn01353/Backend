
import * as bookService from '../services/bookService.js';

// READ
export const fetchAllBooks = async (req, res) => {
  try {
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};

// CREATE
export const createBook = async (req, res) => {
  try {
    const { name, author } = req.body;

    if (!name || !author) {
      return res.status(400).json({
        error: 'Name and author are required'
      });
    }

    const book = { name, author };
    const bookId = await bookService.createBook(book);

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      bookId: bookId
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:  `${error.message || "Internal Server Error"}`
    });
  }
};

// UPDATE
export const editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, author } = req.body;

    if (!name || !author) {
      return res.status(400).json({
        error: 'Name and author are required'
      });
    }

    const book = { id, name, author };
    const result = await bookService.editBook(book);

    if (result === 0) {
      return res.status(404).json({
        error: 'Book not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book updated successfully'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `${error.message || "Internal Server Error"}`
    });
  }
};

// DELETE
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await bookService.deleteBook(id);

    if (result === 0) {
      return res.status(404).json({
        error: 'Book not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully'
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: `${error.message || "Internal Server Error"}`
    });
  }
};
