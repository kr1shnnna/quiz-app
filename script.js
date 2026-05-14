// DOm elements
const startScreen=document.getElementById('start-screen');
const quizScreen=document.getElementById('quiz-screen');
const resultScreen=document.getElementById('result-screen');
const startButton=document.getElementById('start-btn');
const questionText=document.getElementById('question-text');
const answersContainer=document.getElementById('answers-container');
const currentQuestionSpan=document.getElementById('current-question');
const totalQuestionsSpan=document.getElementById('total-questions');
const scoreSpan=document.getElementById('score');
const finalScoreSpan=document.getElementById('final-score');
const maxScoreSpan=document.getElementById('max-score');
const resultMessage=document.getElementById('result-message');
const restartButton=document.getElementById('restart-btn');
const progressBar=document.getElementById('progress-bar');



// Quiz data
const quizQuestions = [
  {
    question: "What is the capital of Nepal?",
    answers: [
      { text: "Saptari", correct: false },
      { text: "Janakpur", correct: false },
      { text: "Kathmandu", correct: true },
      { text: "Biratnagar", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];


//quiz state variables
 let currentQuestionIndex=0;
 let score=0;
 let answersDisabled=false;

 totalQuestionsSpan.textContent=quizQuestions.length;
 maxScoreSpan.textContent=quizQuestions.length;


 //event listeners
 startButton.addEventListener('click',startQuiz);
 restartButton.addEventListener('click',restartQuiz);

 function startQuiz(){
    
    //reset variables

    currentQuestionIndex=0;
    score=0;
    ScoreSpan.textContent=score;

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    showQuestion();


 }

 function showQuestion(){

    //reset state
    answersDisabled=false;
    const currentQuestion=quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent=currentQuestionIndex+1;

    const progessPercent=(currentQuestionIndex/quizQuestions.length)*100;
    progressBar.style.width=progessPercent+"%";

    qestionText.textContent=currentQuestion.question;


    //clear previous answers
    answersContainer.innerHTML='';
    currentQuestion.answers.forEach(answers=>{
            const button=document.createElement('button');
            button.textContent=answers.text;
            button.classList.add('answer-btn');

// what is dataset? dataset is a property of HTML elements that allows you to store custom data attributes on the element. These attributes are prefixed with "data-" and can be accessed using JavaScript through the dataset property. In this case, we are storing whether the answer is correct or not in the dataset of the button element. This allows us to easily check if the selected answer is correct when the user clicks on it.
            button.dataset.correct=answers.correct;

            button.addEventListener('click',selectAnswer);

            answersContainer.appendChild(button);
    })
 }

 function selectAnswer(event){
 // optimization 
    if(answersDisabled) return;


    answersDisabled=true; 
     const selectedButton=event.target;
     const isCorrect=selectedButton.dataset.correct==='true';


     //toodo : 
     Array.from(answersContainer.children).forEach(button=>{

        if(button.dataset.correct==='true'){
            button.classList.add('correct');
 }
        else{
            button.classList.add('incorrect');
        }
    });

    if(isCorrect){
        score++;
        scoreSpan.textContent=score;
    }
    


 function restartQuiz(){
    console.log("Quiz re-started");
 }

