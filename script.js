const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: "HTML"
  },
  {
    question: "What is Flutter?",
    options: [
      "A game engine",
      "A web browser",
      "A UI toolkit by Google",
      "A programming language"
    ],
    answer: "A UI toolkit by Google"
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Larry Page", "Mark Zuckerberg", "Bill Gates"],
    answer: "Bill Gates"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => selectOption(li));
    optionsEl.appendChild(li);
  });
}

function selectOption(li) {
  const allOptions = optionsEl.querySelectorAll("li");
  allOptions.forEach(option => option.classList.remove("selected"));
  li.classList.add("selected");
  selectedOption = li.textContent;
}

nextBtn.addEventListener("click", () => {
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  selectedOption = null;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.innerHTML = `🎉 Your score: <strong>${score} / ${quizData.length}</strong>`;
}

loadQuestion();
