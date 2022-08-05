var timerEl = document.getElementById('time_in_sec');


function time_in_sec() {
    var timeLeft = 120;
  
   
    var timeInterval = setInterval(function() {
     
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;

      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);

  }

time_in_sec();

// What can be placed in a javascript array? 
//1. Boolean
//2. Numbers and strings 
//3. Special characters
//4. All of the above 

// What are the different ways a function can be declared in Javascript? 
//1. Function Expression
//2. Constructor Functions
//3. Getter Functions
//4. Hoisting

//What is an object in javascript?
//1.Collection of related data and/or functionality. These usually consist of several variables and functions
//2.Contains information about the browser.
//3. Marks a block of statements to be executed while a condition is true
//4. Declares a variable

//What are the different types of string methods?
//1. charAt()
//2. constructor
//3. repeat()
//4. All of the above