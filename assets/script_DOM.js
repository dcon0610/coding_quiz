
    var button5 = document.querySelector('#start')
    var question = document.querySelector('#question')
    var answer1 = document.querySelector('#answer1')
    var answer2 = document.querySelector('#answer2')
    var answer3 = document.querySelector('#answer3')
    var answer4 = document.querySelector('#answer4')
    var parent = document.querySelector('#parent')
 
   
    var elem = document.querySelector('#whole')
    var flag=true
  var DisplayQuestion1=0

    console.log(button5)
    button5.addEventListener('click',hidebutton,false);
    button5.addEventListener('click',displayquestion,false);
    var fuckedVariable = document.querySelector('#displayQuestion1');

    console.log(fuckedVariable)
   
    

    function hidebutton() {
        document.getElementById("start").style.display = 'block'; 
        this.style.display = 'none'
    }   
    

    
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
          correctAnswer: "4"
        }
      ];

function displayquestion(DisplayQuestion1){
  j=0
  
  
   

displayQuestion1=document.createElement("displayQuestion")
displayQuestion1.classList.add("center")
parent.appendChild(displayQuestion1)

 //https://www.sitepoint.com/simple-javascript-quiz/#:~:text=The%20Basic%20Structure%20of%20Your%20JavaScript%20Quiz&text=To%20set%20up%20the%20structure,div%3E%20to%20display%20the%20results
 //I grabbed an array of questions from the above site   
 


var section=document.createElement("section")
var heading= document.createElement("h3")
var list = document.createElement("ul")

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

//getting id of buttons https://stackoverflow.com/questions/10291017/how-to-get-id-of-button-user-just-clicked
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
console.log(buttons)

var button1 = document.getElementById('#1')
console.log(button1)

for (var k = 0; k <= buttonsCount-1; k++) {
   
    buttons[k].onclick = function() {
        flag=false
       if (this.id===myQuestions[j].correctAnswer){
        alert("correct")
     
       }
       else {
        alert("incorrect")
      
       }
       
     
       var Buttons=""
      
}
}
  j=0
  
  
   

displayQuestion1=document.createElement("displayQuestion")
displayQuestion1.classList.add("center")
parent.appendChild(displayQuestion1)

 //https://www.sitepoint.com/simple-javascript-quiz/#:~:text=The%20Basic%20Structure%20of%20Your%20JavaScript%20Quiz&text=To%20set%20up%20the%20structure,div%3E%20to%20display%20the%20results
 //I grabbed an array of questions from the above site   
 


var section=document.createElement("section")
var heading= document.createElement("h3")
var list = document.createElement("ul")

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

//getting id of buttons https://stackoverflow.com/questions/10291017/how-to-get-id-of-button-user-just-clicked
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
console.log(buttons)

var button1 = document.getElementById('#1')
console.log(button1)

for (var k = 0; k <= buttonsCount-1; k++) {
   
    buttons[k].onclick = function() {
        flag=false
       if (this.id===myQuestions[j].correctAnswer){
        alert("correct")
     
       }
       else {
        alert("incorrect")
      
       }
       
     
       var Buttons=""
      
}
}


}



  



