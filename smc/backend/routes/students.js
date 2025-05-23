import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
    // Fetch students from database
    res.json([{ id: 1, name: "John Doe", email: "john@example.com" }]);
});

export default router;
