Quiz App
A web-based interactive quiz application built with JavaScript, Node.js, and Express.js. The app fetches multiple-choice questions from a backend API, features a timer for each question, tracks user scores, and displays results at the end.
Features

Dynamic Questions: Loads multiple-choice questions from a backend API.
Timed Questions: Each question has a 15-second timer; auto-advances if time runs out.
Score Tracking: Awards 1 point for each correct answer.
Result Display: Shows final score and correct answers after the quiz.
Responsive Design: Clean, user-friendly interface with CSS styling.

Tech Stack

Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript (Fetch API)
Development Tools: Nodemon (for auto-reloading during development)

Project Structure
quiz-app/
├── public/
│   ├── index.html    # Frontend structure
│   ├── styles.css    # Styling for the quiz
│   └── script.js     # Frontend logic (timer, score, API calls)
├── server.js         # Backend server (API and static file serving)
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation

Prerequisites

Node.js (v14 or higher)
npm (comes with Node.js)
A modern web browser (e.g., Chrome, Firefox)

Installation

Clone the Repository (or download the project files):
git clone <repository-url>
cd quiz-app


Install Dependencies:
npm install

This installs Express.js and Nodemon.

Start the Server:
npm start

The server runs on http://localhost:3000 using Nodemon for auto-reloading.


Usage

Open a browser and navigate to http://localhost:3000.
The quiz starts automatically, displaying the first question with four options.
Select an answer within 15 seconds, or the app auto-advances.
After answering, click Next to proceed.
At the end, view your score and the correct answers.

API
The backend provides one endpoint:

GET /api/questions: Returns a JSON array of quiz questions.Example response:[
  {
    "id": 1,
    "question": "What is the capital of France?",
    "options": ["Paris", "London", "Berlin", "Madrid"],
    "correctAnswer": "Paris"
  },
  ...
]



Extending the App

Add Questions: Modify the questions array in server.js or connect to a database/external API (e.g., Open Trivia DB).
Restart Option: Add a "Restart" button in script.js to reset the quiz.
Styling: Enhance styles.css for mobile responsiveness or custom themes.
Leaderboard: Store scores in localStorage or a database.

Deployment
To deploy the app:

Push to a GitHub repository (set to private if needed via GitHub Settings > Danger Zone).
Deploy to a platform like Heroku, Vercel, or Netlify.
For Heroku, ensure public/ is served and the API is accessible.
See Heroku Node.js deployment guide.



Contributing

Fork the repository.
Create a feature branch: git checkout -b feature-name.
Commit changes: git commit -m "Add feature".
Push to the branch: git push origin feature-name.
Open a pull request.

License
This project is licensed under the MIT License.
Contact
For questions or feedback, open an issue on the repository or contact the maintainer.
