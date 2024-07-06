const questions = [
  {
    question: "Imran ikut lomba F1. Imran menyalip orang di posisi nomor dua. Sekarang Imran berada di posisi berapa?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Bila sebuah telur direbus hingga matang butuh waktu 1 menit, maka 10 telur butuh waktu berapa lama?",
    answers: [
      { text: "3", correct: false },
      { text: "1", correct: true },
      { text: "10", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Ketika Shafly pergi ke sekolah, Shafly bertemu 4 orang tante-tante, tiap tante pergi bersama 2 anaknya, dan tiap anak bawa 2 tas. Pertanyaanya adalah berapa banyak orang yang pergi ke sekolah",
    answers: [
      { text: "7", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: false },
      { text: "1", correct: true },
    ],
  },
  {
    question: "Kenapa motor berhenti di depan lampu merah?",
    answers: [
      { text: "Karena lampunya nyala merah", correct: false },
      { text: "Karena ada polisi/halo deck", correct: false },
      { text: "Karena peraturan", correct: false },
      { text: "Karena di rem", correct: true },
    ],
  },
  {
    question: "Ruangan apa yang paling ditakuti di rumah sakit?",
    answers: [
      { text: "IGD", correct: false },
      { text: "Administrasi", correct: true },
      { text: "Kamar mayat", correct: false },
      { text: "Operasi", correct: false },
    ],
  },
  {
    question: "Ketika Megamek memiliki uang sebanyak Rp. 1600. Kemudian dia membeli permen seharga Rp. 800. Berapa uang kembalian yang diterima Megamek?",
    answers: [
      { text: "700", correct: false },
      { text: "200", correct: true },
      { text: "500", correct: false },
      { text: "800", correct: false },
    ],
  },
  {
    question: "Arnov pergi ke warung membawa uang Rp. 5000. Jika total belanja Rp. 4800 maka kembaliannya adalah...",
    answers: [
      { text: "Tidak ada kembalian", correct: false },
      { text: "1 permen kiss", correct: true },
      { text: "200", correct: false },
      { text: "Hikmahnya", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML ="Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
})

startQuiz();