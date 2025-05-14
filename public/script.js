let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
const timePerQuestion = 15; 


const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const timeEl = document.getElementById('time');
const resultEl = document.getElementById('result');


async function fetchQuestions() {
  try {
    const response = await fetch('/api/questions');
    questions = await response.json();
    startQuiz();
  } catch (error) {
    console.error('Error fetching questions:', error);
    questionEl.textContent = 'Failed to load questions.';
  }
}


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultEl.classList.add('hidden');
  nextBtn.disabled = true;
  showQuestion();
}


function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResult();
    return;
  }

  const question = questions[currentQuestionIndex];
  questionEl.textContent = question.question;
  optionsEl.innerHTML = '';
  nextBtn.disabled = true;

  
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option');
    button.addEventListener('click', () => selectAnswer(option));
    optionsEl.appendChild(button);
  });

 
  let timeLeft = timePerQuestion;
  timeEl.textContent = timeLeft;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer(null); 
    }
  }, 1000);
}


function selectAnswer(selectedOption) {
  clearInterval(timer);
  const question = questions[currentQuestionIndex];
  const buttons = optionsEl.querySelectorAll('.option');


  buttons.forEach(button => {
    button.disabled = true;
    if (button.textContent === question.correctAnswer) {
      button.classList.add('correct');
    }
    if (button.textContent === selectedOption && selectedOption !== question.correctAnswer) {
      button.classList.add('incorrect');
    }
  });


  if (selectedOption === question.correctAnswer) {
    score++;
  }

  nextBtn.disabled = false;
}


nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  showQuestion();
});


function showResult() {
  questionEl.textContent = 'Quiz Completed!';
  optionsEl.innerHTML = '';
  nextBtn.classList.add('hidden');
  resultEl.classList.remove('hidden');
  resultEl.innerHTML = `
    <p>You scored ${score} out of ${questions.length}!</p>
    <h3>Correct Answers:</h3>
    ${questions.map((q, i) => `<p>${i + 1}. ${q.question}: ${q.correctAnswer}</p>`).join('')}
  `;
}


fetchQuestions();