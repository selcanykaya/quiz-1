const startButton = document.querySelector(".start-btn");
const box = document.querySelector(".quiz-box");
const nextButton = document.querySelector(".next-btn");
const questionText = document.querySelector(".question");
const btnA = document.querySelector(".a");
const btnB = document.querySelector(".b");
const btnC = document.querySelector(".c");
const btnD = document.querySelector(".d");



let count = 0;
startButton.addEventListener("click", function(){
box.classList.remove("hidden");
startButton.classList.add("hidden");

questionText.innerHTML = questionsTxt[count].question;
btnA.innerHTML = questionsTxt[count].options[0];
btnB.innerHTML = questionsTxt[count].options[1];
btnC.innerHTML = questionsTxt[count].options[2];
btnD.innerHTML = questionsTxt[count].options[3];

count++;

});

const questionsTxt = [
    {
      id: 1,
      title: "Question-1",
      question: "Which character is from Jujutsu Kaisen?",
      options: ["a: Denji", "b: Jett", "c: Gojo", "d: Momo"],
      answer: "c"
    },
    {
        id: 2,
        title: "Question-2",
        question: "Which character is from Bleach?",
        options: ["a: Rukia", "b: Viper", "c: Makima", "d: Appa"],
        answer: "a"
      },
      {
        id: 3,
        title: "Question-3",
        question: "Which character is from Avatar the Last Air Bender?",
        options: ["a: Eren Yeager", "b: Brimstone", "c: Power", "d: Zuko"],
        answer: "d"
      },
];

nextButton.addEventListener("click", function(){
    if(count != questionsTxt.length){
         questionText.innerHTML = questionsTxt[count].question;
    btnA.innerHTML = questionsTxt[count].options[0];
    btnB.innerHTML = questionsTxt[count].options[1];
    btnC.innerHTML = questionsTxt[count].options[2];
    btnD.innerHTML = questionsTxt[count].options[3];
    count++;
    }else {
        alert("You finished quiz!")
    }
   
});
console.log(questionsTxt[0].question);