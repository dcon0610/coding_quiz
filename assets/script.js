
    var buttonStart = document.querySelector('#start')
    var parent = document.querySelector('#parent')
    var timer = document.querySelector("#timer")
    let myWinner = []
  //due to passing variables through different functions, they were best declared globally
  //since when started this assignment, we had not discussed scope. Different in future. 
  var DisplayQuestion1
  var score = 0
  var buttons=[]
  var button1
  var button2
  var button3
  var section
  var heading
  var list
  var listItem
  var isAnswerCorrect
  var j=0
  var totalSeconds=60
  var minutes=totalSeconds/60
  var seconds=00
  //this is an object, which contains all of the questions
  var myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        1: "Douglas Crockford",
        2: "Sheryl Sandberg",
        3: "Brendan Eich"
      },
      correctAnswer: "3"
    },
    {
      question: "Inside which HTML element do we put the Javascript",
      answers: {
        1: "<script>",
        2: "<object>",
        3: "<javascript>"
      },
      correctAnswer: "31"
    },
    {
      question: "An external Javascript file needs the <script> tag to run",
      answers: {
        1: "True",
        2: "False",
        3: "it depends on the type of javascript"
      },
      correctAnswer: "2"
    },

    {
      question: "how can you comment out a line in javascript",
      answers: {
        1: "#",
        2: "!!",
        3: "//"
      },
      correctAnswer: "3"
    },

    {
      question: "Who invented JQuery?",
      answers: {
        1: "Sir Donald Trump",
        2: "John Resig",
        3: "Lance Franklin"
      },
      correctAnswer: "2"
    },
  ];
  //this is when the start button is clicked: 
  //the first one removes the start button from view
    buttonStart.addEventListener('click',block,false);
  //the second one displays the first question
    buttonStart.addEventListener('click',displayquestion,false);
  //the third one starts the timer
    buttonStart.addEventListener('click',starter,false);
  //this function hides the start button 
    function block() { document.getElementById("start").style.display = 'block'; 
    this.style.display = 'none'}
   
  //these functions run the timer, until it runs down to zero, or the last question
  //is clicked. 
    function starter() {setInterval(timer1, 1000)}

    function timer1() {
    if (totalSeconds>0 && score===0 ) {
    totalSeconds=totalSeconds-1
    minutes=Math.floor(totalSeconds/60)
    console.log(score)
    seconds=Math.round((totalSeconds/60-Math.floor(totalSeconds/60))*60)
    if (seconds<10) {
      seconds="0"+seconds
    }
    console.log(totalSeconds)
    timer.innerHTML="Timer: "+ minutes+ ":" +seconds
      
    }
    }
/*
This function displays the questions sequentially.
    the if statement goes to the end function if all questions are passed through,
    otherwise it displays the next question.
    it creates all the DOM elements needed: a heading, and a loop to populate the items 
    as buttons with the multiple choice options. everything is appended to the parent.
    We then check if the answer is right for the previous question at the button click event, as we display
    it on the next question. "previous answer is correct/incorrect"
    This happens in the function checkingAnswer
    whilst undefined for the first question, for every subsequent question
    the result is then appended to the DOM
     

*/
function displayquestion(){
  console.log("questions length" + myQuestions.length )

  if(j>myQuestions.length-1) {
    
    end()
  }
  else {
displayQuestion1=document.createElement("displayQuestion")
displayQuestion1.id="find"
displayQuestion1.classList.add("center")
parent.appendChild(displayQuestion1)

section=document.createElement("section")
heading= document.createElement("h3")
list = document.createElement("ul")



heading.appendChild(document.createTextNode(myQuestions[j].question))
section.appendChild(heading)
displayQuestion1.appendChild(section)

for (i=1; i<4; i++){
    var listItem = document.createElement("li")
    listItem.style.padding = "1%"
    var button = document.createElement("button")
    button.id = i 
    button.setAttribute("class","btn-primary")
    button.appendChild(document.createTextNode(myQuestions[j].answers[i]))
    listItem.appendChild(button)
    list.appendChild(listItem)
    section.appendChild(list)
    displayQuestion1.appendChild(section)
    
}
if (isAnswerCorrect=== undefined){
  isAnswerCorrect=""
}
var answer=document.createElement("div")
var confirm = document.createTextNode( isAnswerCorrect)
answer.appendChild(confirm)
console.log(answer)
section.appendChild(answer)
console.log(section)

button1 = document.getElementById('1')
button2 = document.getElementById('2')
button3 = document.getElementById('3')
buttons=[button1,button2,button3]
console.log(buttons)


  }

  for (i=0; i<3; i++) {
    buttons[i].addEventListener ('click', checkingAnswer,false)
    }

}
/*
This function checks the answer. it is passed to whenever an answer button is clicked.
it checks the button id against the answer id and returns incorrect.
if the answer is incorrect, it takes 10 seconds off the time.
once all this is done, it then removes the question from the DOM,
 and passes back to the displayQuestion function to get the next question set up.
*/
function checkingAnswer() {
  console.log("j"+j)
  if(myQuestions[j].correctAnswer===this.id) {
    isAnswerCorrect="previous answer was correct"
  }

  else {
    isAnswerCorrect="previous answer was incorrect"
    totalSeconds=totalSeconds-10
  }
  console.log(totalSeconds)
    j++
      console.log(button1)

      displayQuestion1.remove()
      displayquestion()

    }
/*
This function gets passed to if there are no more questions to display.
The timer stops, (score>0) and we get the minutes and seconds to display and stop running down
we then create and append to the DOM:
    announcing the result of the previous answer
    announcing the quiz is finished
    giving the score (which is the time)
    giving the opportunity to enter your initials to be recorded. 
    once enter pressed on that input, 
    the initials and results are passed to the local storage and the display winners function entered.
    which is a nested function in this function.
*/
function end (){
 
  score=totalSeconds
  minutes=Math.floor(totalSeconds/60)
  seconds=Math.round((totalSeconds/60-Math.floor(totalSeconds/60))*60)
  if (seconds<10) {
    seconds="0"+seconds
  }
  timer.innerHTML="Timer: "+ minutes+ ":" +seconds

var endpage = document.createElement('div')

var paragraph1=document.createElement("p")
var paragraph2=document.createElement("p")
var paragraph3=document.createElement("p")
var paragraph4=document.createElement("p")
console.log(paragraph1)
var Node= document.createTextNode(isAnswerCorrect)
paragraph1.appendChild(Node)
endpage.appendChild(paragraph1)

Node= document.createTextNode("Your quiz is finished!")
paragraph2.appendChild(Node)
 endpage.appendChild(paragraph2)

 Node= document.createTextNode("your score is: " + score)
 paragraph3.appendChild(Node)
endpage.appendChild(paragraph3)

displayQuestion1.appendChild(endpage)
parent.appendChild(displayQuestion1)

displayQuestion1.removeChild(section)
 
Node= document.createTextNode("enter your initials and press enter:")
paragraph4.appendChild(Node)
endpage.appendChild(paragraph4)
var input=document.createElement("input")
input.setAttribute("type","text")
input.placeholder="enter your initials"
input.onkeydown=function() {
if(event.key === 'Enter'){
keys=Object.keys(localStorage)
var k=localStorage.length

localStorage.setItem(k+1, JSON.stringify(input.value+" " +score))
console.log("keys length" + keys.length)
displayWinners()
}
}
endpage.appendChild(input)
displayQuestion1.appendChild(endpage)
parent.appendChild(displayQuestion1)
/*
this function loops through all the winners stored in local storage, creates a list and
displays them in that list. Of course, the previous elements appended to the DOM are removed
before this happens. 
*/
function displayWinners(){

  displayQuestion1.removeChild(endpage)


section=document.createElement("section")
heading= document.createElement("h3")
list = document.createElement("ul")



heading.appendChild(document.createTextNode("These are the recent players scores"))
section.appendChild(heading)
displayQuestion1.appendChild(section)


for (i=1; i<localStorage.length+1; i++){
    var listItem = document.createElement("li")
    listItem.style.padding = "1%"
    var item=localStorage.getItem(JSON.parse(i))
    item=item.slice(1,-1)
    listItem.appendChild(document.createTextNode(item))
    list.appendChild(listItem)
    section.appendChild(list)
    displayQuestion1.appendChild(section)

}




}

}



