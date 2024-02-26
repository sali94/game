const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Makeup Language",
    ],
    answer: 0,
  },
  {
    question:
      "Which of the following tags is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<ul>"],
    answer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const nextButton = document.getElementById("next-btn");
const lifelineButton = document.getElementById("lifeline-btn");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
let timer;
let timerCount = 15;

function showQuestion(question) {
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");
    button.addEventListener("click", () => handleOptionClick(index));
    optionsElement.appendChild(button);
  });
}

function handleOptionClick(index) {
  clearInterval(timer);
  if (index === questions[currentQuestionIndex].answer) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    alert("Correct answer!");
  } else {
    alert("Wrong answer! Game over!");
    // Optionally, you can reset the game here
  }
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
    startTimer();
  } else {
    alert("Congratulations! You've completed the game!");
    // Optionally, you can reset the game here
  }
}

function startTimer() {
  timerCount = 15;
  timerElement.textContent = timerCount;
  timer = setInterval(() => {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      alert("Time's up! Game over!");
      // Optionally, you can reset the game here
    }
  }, 1000);
}

function useLifeline() {
  alert("50/50 Lifeline: Two incorrect options will be removed.");
  const options = optionsElement.querySelectorAll("button");
  let removedCount = 0;
  for (let i = 0; i < options.length; i++) {
    if (removedCount === 2) break;
    if (i !== questions[currentQuestionIndex].answer) {
      options[i].style.display = "none";
      removedCount++;
    }
  }
  lifelineButton.disabled = true;
}

nextButton.addEventListener("click", nextQuestion);
lifelineButton.addEventListener("click", useLifeline);

// Initial question display
showQuestion(questions[currentQuestionIndex]);
startTimer();
