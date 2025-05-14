const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Jupiter", "Mars", "Venus", "Mercury"],
    correctAnswer: "Mars"
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  }
];

app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/questions', (req, res) => {
  res.json(questions);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});