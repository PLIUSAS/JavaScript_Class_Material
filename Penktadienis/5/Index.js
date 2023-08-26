const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question:
      "Which famous scientist developed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
    answer: "Albert Einstein",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe"],
    answer: "Blue Whale",
  },
  {
    question: "Which natural disaster is measured using the Richter scale?",
    options: ["Tornado", "Earthquake", "Hurricane"],
    answer: "Earthquake",
  },
  {
    question: "Which famous playwright wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
    answer: "William Shakespeare",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the chemical symbol for the element gold?",
    options: ["Au", "Ag", "Fe"],
    answer: "Au",
  },
  {
    question: "Which historical figure is known for the theory of evolution?",
    options: ["Galileo Galilei", "Charles Darwin", "Nikola Tesla"],
    answer: "Charles Darwin",
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    options: ["Africa", "Asia", "South America"],
    answer: "Africa",
  },
];

setTimeout(() => {
  console.log("set timeout happened");
}, 3000);

const questionContainer = document.querySelector("#questionContainer");
let questionIndex = localStorage.getItem("questionIndex") || 0;
let score = localStorage.getItem("score") || 0;

function displayQuestion() {
  questionContainer.innerHTML = "";
  if (questionIndex < questions.length) {
    const timer = document.createElement("p");
    timer.textContent = 10;
    const questionPar = document.createElement("p");
    questionPar.textContent = questions[questionIndex].question;
    questionContainer.append(timer, questionPar);

    const interval = setInterval(() => {
      timer.textContent = timer.textContent - 1;
      if (timer.textContent === "-1") {
        questionIndex++;
        localStorage.setItem("questionIndex", questionIndex);
        clearInterval(interval);
        displayQuestion();
      }
    }, 1000);

    questions[questionIndex].options.forEach((element) => {
      const button = document.createElement("button");
      button.textContent = element;

      button.addEventListener("click", () => {
        if (questions[questionIndex].answer === element) {
          score++;
          localStorage.setItem("score", score);
        }
        questionIndex++;
        localStorage.setItem("questionIndex", questionIndex);
        clearInterval(interval);
        displayQuestion();
      });

      questionContainer.append(button);
    });

    const scorePar = document.createElement("p");
    scorePar.textContent = `Score: ${score} / ${questions.length}`;
    questionContainer.append(scorePar);
  } else {
    const resultP = document.createElement("p");
    resultP.textContent = `Congratulations your score is ${score}`;
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => {
      localStorage.removeItem("score");
      localStorage.removeItem("questionIndex");
      score = 0;
      questionIndex = 0;
      displayQuestion();
    });

    questionContainer.append(resultP, resetButton);
  }
}
const reg = /(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}/gi;
console.log(reg.test("+37061821229"));

console.log("+37061821229asdfsadf+37021881229".replace(reg, "REPLACED"));

displayQuestion();
