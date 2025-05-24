import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get All Students
router.get('/', async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving students' });
  }
});

// Create Student
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  try {
    const student = await prisma.student.create({ data: { name, email } });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Error creating student' });
  }
});

export default router;
