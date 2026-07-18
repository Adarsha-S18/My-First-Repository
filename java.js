const min=1;
const max=200;
const answer=Math.floor(Math.random()*(max-min+1)+min);
let attempt=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`guess the number b/w ${min}--${max} number`)
    if  (isNaN(guess)){
        window.alert('please enter valid number')

    }
    else if(guess<min || guess>max){
        window.alert('pleasase enter a valid number')
    }
    else{attempt++;
        if(guess<answer){
            window.alert('the guess is low please try again')
        }
        else if(guess>answer){
            window.alert('the guess is  too bhigh please try again')
        }
        else{
            window.alert(`correct ans is ${answer} it is requiired attempts of ${attempt}`)
            running=false;

        
        }
    }
}
            document.getElementById('game').textContent=`the ans is ${answer} and attmpt is ${attempt}`;