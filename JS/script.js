//  creating secrate number: 
  let secretNumber = Math.trunc(Math.random() * 20 + 1);//math.ramdom is creating ramdom number like point number.useing  math.trunc you not getting point value.
  console.log(secretNumber); //finding secrate number.
   let score = 20;
   let HighScore = 0;

   //logics:
   document.getElementById("checkbtn").addEventListener('click', () => {
       const guessedNo = Number(document.getElementById('guess').value);

    //    if there is no input:
       if (!guessedNo) {
           document.querySelector('.message').textContent = "No Number!";

    //  when player wins:
       } else if (guessedNo === secretNumber) {
           document.querySelector('.message').textContent = "Correct Number!";
           document.querySelector('.number').textContent = secretNumber;
           document.querySelector('body').style.backgroundColor = "Green";
    // for highscore:
           if (score > HighScore) {
               HighScore = score;
               document.getElementById('HighScore').textContent = HighScore;
           }
      
       }
       //when the guess is too high:
       else if (guessedNo > secretNumber) {
           if (score > 1) {
               document.querySelector('.message').textContent = "Too High!";
               score = score - 1;
               
               document.getElementById('score').textContent = score;
           } else {
               document.querySelector('.message').textContent = "You Lost the game!";
               document.getElementById('score').textContent = 0;
           }

       }
    //    when the guess is too low:
        else if (guessedNo < secretNumber) {
           if (score > 1) {
               document.querySelector('.message').textContent = "Too Low!";
               score = score - 1;
               document.getElementById('score').textContent = score;
           } else {
               document.querySelector('.message').textContent = "You Lost the game!";
               document.getElementById('score').textContent = 0;
               document.querySelector("body").style.backgroundColor="red"
           }
       }
   });

    //for again button:

   document.querySelector('.Again').addEventListener('click', () => {
   if (score > HighScore) {
       HighScore = score;
       document.getElementById('HighScore').textContent = HighScore;
   }

   score = 20;
   secretNumber = Math.trunc(Math.random() * 20 + 1);

   document.querySelector('.message').textContent = 'Guess your number..!';
   document.getElementById('score').textContent = score;

   document.querySelector('.number').textContent = '?';
   document.querySelector('body').style.backgroundColor = 'black';
});


