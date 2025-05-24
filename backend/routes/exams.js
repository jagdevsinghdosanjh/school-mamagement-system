import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get All Exams
router.get('/', async (req, res) => {
  try {
    const exams = await prisma.exam.findMany();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving exams' });
  }
});

// Create Exam
router.post('/', async (req, res) => {
  const { subject, score, studentId } = req.body;

  try {
    const exam = await prisma.exam.create({
      data: { subject, score, studentId },
    });

    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ error: 'Error creating exam' });
  }
});

export default router;
