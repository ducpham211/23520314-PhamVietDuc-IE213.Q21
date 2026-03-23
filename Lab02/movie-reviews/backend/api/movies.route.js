import express from 'express';
import MoviesController from './movies.controller.js';

const router = express.Router(); // Lấy router của express

// Route yêu cầu truy xuất dữ liệu từ API
router.route('/').get(MoviesController.apiGetMovies);

export default router;
