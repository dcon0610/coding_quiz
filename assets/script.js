
    var buttonStart = document.querySelector('#start')
    var parent = document.querySelector('#parent')
    var timer = document.querySelector("#timer")
    let myWinner = []
    
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
  var right
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
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        1: "Node.js",
        2: "TypeScript",
        3: "npm"
      },
      correctAnswer: "3"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        1: "Angular",
        2: "jQuery",
        3: "ESLint"
      },
      correctAnswer: "3"
    },

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
      question: "Who invented Python?",
      answers: {
        1: "Douglas Crockford",
        2: "Sheryl Sandberg",
        3: "Brendan Eich"
      },
      correctAnswer: "3"
    },
  ];
  
    buttonStart.addEventListener('click',block,false);
    buttonStart.addEventListener('click',displayquestion,false);
    buttonStart.addEventListener('click',starter,false);

    function block() { document.getElementById("start").style.display = 'block'; 
    this.style.display = 'none'}
   
    var j=0
    var totalSeconds=60
    var minutes=totalSeconds/60
    var seconds=00
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
  function newfunction() {
    console.log("j"+j)
    if(myQuestions[j].correctAnswer===this.id) {
      right="previous answer was correct"
    }

    else {
      right="previous answer was incorrect"
      totalSeconds=totalSeconds-10
    }
    console.log(totalSeconds)
      j++
        console.log(button1)

        displayQuestion1.remove()
        displayquestion()

      }
    
    

    
   

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
if (right=== undefined){
  right=""
}
var answer=document.createElement("div")
var confirm = document.createTextNode( right)
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
    buttons[i].addEventListener ('click', newfunction,false)
    }

}

function end (){
  score=totalSeconds
  minutes=Math.floor(totalSeconds/60)
  seconds=Math.round((totalSeconds/60-Math.floor(totalSeconds/60))*60)
  if (seconds<10) {
    seconds="0"+seconds
  }
  timer.innerHTML="Timer: "+ minutes+ ":" +seconds

var endpage =document.createElement('div')
var emptyLine = document.createElement('br')

endpage.appendChild(document.createTextNode("Your quiz is finished!"))
endpage.appendChild(emptyLine)
endpage.appendChild(document.createTextNode("your score is: " +score))

displayQuestion1.appendChild(endpage)
parent.appendChild(displayQuestion1)

displayQuestion1.removeChild(section)
console.log(displayQuestion1)
console.log(right)




//localStorage.setItem(winnerlist, JSON.stringigy my winner)

//let myt LIst to display = JSON .parese local localStorage


//for loop



}

  



