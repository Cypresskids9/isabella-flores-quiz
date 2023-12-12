let score = 0;
let points = 10;

function correct(button){
    score+=points; //adds 10 to score
    button.style.backgroundColor = 'green';
}

function incorrect(button){
    score-=points; //subtracts 10 from score
    button.style.backgroundColor = 'red';
}