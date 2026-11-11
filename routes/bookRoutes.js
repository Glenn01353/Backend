import * as bookController from '../controllers/bookControllers.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBooks);
bookRoutes.put('/:id', bookController.editBook);
bookRoutes.post('/', bookController.createBook);
bookRoutes.delete('/:id', bookController.deleteBook);

export default bookRoutes;