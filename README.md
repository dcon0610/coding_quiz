# homework4
This assignment was done on the premise that we build all the neccessary pages on the DOM in the javascript, and then remove them once they are finished with. each function (except checking answer) represents a change in the DOM. 
pressing start on the quiz stargs a few functions.
    the first one removes the start button from view
    the second one displays the first question and will loop through
    the third one starts the timer

there are two functions that run the timer, until it runs down to zero, or the last question
  is clicked. 

  function displayQuestion displays the questions sequentially.
    the if statement goes to the end function if all questions are passed through,
    otherwise it displays the next question.
    it creates all the DOM elements needed: a heading, and a loop to populate the items 
    as buttons with the multiple choice options. everything is appended to the parent.
    We then check if the answer is right for the previous question at the button click event, as we display
    it on the next question. "previous answer is correct/incorrect"
    This happens in the function checkingAnswer
    whilst undefined for the first question, for every subsequent question
    the result is then appended to the DOM.

function checkingAnswer checks the answer. it is passed to whenever an answer button is clicked.
it checks the button id against the answer id and returns incorrect.
if the answer is incorrect, it takes 10 seconds off the time.
once all this is done, it then removes the question from the DOM,
 and passes back to the displayQuestion function to get the next question set up.

function end gets passed to if there are no more questions to display.
The timer stops, (score>0) and we get the minutes and seconds to display and stop running down
we then create and append to the DOM:
    announcing the result of the previous answer
    announcing the quiz is finished
    giving the score (which is the time)
    giving the opportunity to enter your initials to be recorded. 
    once enter pressed on that input, 
    the initials and results are passed to the local storage and the display winners function entered.
    which is a nested function in this function.

function displayWinners loops through all the winners stored in local storage, creates a list and
displays them in that list. Of course, the previous elements appended to the DOM are removed
before this happens. 

for images of the assignment, please look in the images folder.