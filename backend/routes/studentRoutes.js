import express from 'express';
import { createStudent, getAllStudents } from '../controllers/studentController.js';
import authenticateToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authenticateToken);

router.post('/students', createStudent);

router.get('/students', getAllStudents);

export default router;
