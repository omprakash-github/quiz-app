const question = [
  {
    que: "which of the following is a markup language",
    a: "HTMl",
    b: "C",
    c: "C++",
    d: "python",
    correct: "a",
  },
  {
    que: "which year does the javascript launch",
    a: "1995",
    b: "200",
    c: "5666",
    d: "89444",
    correct: "b",
  },
  {
    que: "what is my name",
    a: "omprakash",
    b: "prakash",
    c: "sunil",
    d: "hawa",
    correct: "c",
  },
  {
    que: "what is your adress",
    a: "madi",
    b: "tadi",
    c: "kahdi",
    d: "lami",
    correct: "d",
  },
];
let index=0;
let total=total.length;
let right=0,wrong=0;
const queBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll('.options');

const loadQuestion=()=>{
  if(index===total)
  {
    return endQuiz();
  }
reset();

queBox.innerText=`${index+1} ${data.que}`;
optionInputs[0].nextElementSibling.innerHTML=data.a;
optionInputs[1].nextElementSibling.innerHTML=data.b;
optionInputs[2].nextElementSibling.innerHTML=data.c;
optionInputs[3].nextElementSibling.innerHTML=data.d;
}

const submitQuiz=()=>{
    const ans=getAnswer();
    const data=question[index];
  if(ans===data.correct)
  {
    right++;

  }
  else{
    wrong++;
  }
  index++;
  loadQuestion()
}

const getAnswer=()=>
{
    optionInputs.forEach((input)=>{
    if(input.checked){
      return input.value;
    }
    })
}
const reset=()=>{
  optionInputs.forEach((input)=>{
    input.checked=false;
    })
  }
  const endQuiz=()=>{
    document.getElementById("box").innerHTML="<h1>thank you for playong quiz </h1>"
  }
//intial call hai yo chai
loadQuestion();