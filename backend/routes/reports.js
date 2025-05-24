import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Generate Student Report
router.get('/:studentId', async (req, res) => {
  const { studentId } = req.params;

  try {
    const exams = await prisma.exam.findMany({ where: { studentId } });
    if (!exams.length) {
      return res.status(404).json({ error: 'No exams found for this student' });
    }

    const totalScore = exams.reduce((sum, exam) => sum + exam.score, 0);
    const averageScore = totalScore / exams.length;

    res.json({ studentId, totalScore, averageScore, exams });
  } catch (error) {
    res.status(500).json({ error: 'Error generating report' });
  }
});

export default router;
