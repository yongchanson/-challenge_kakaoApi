const forms = document.querySelector("#form");
const iN = document.querySelector("#InputN"); //40
const gN = document.querySelector("#GuessN"); //17
const greeting = document.querySelector("#greeting"); //you chose~
// const play = document.querySelector("#Play");

function BtnClick(evnet) {
    event.preventDefault();
    const result = document.querySelector("#result"); //you win~
    const InputNV = parseInt(iN.value); 
    const GuessNV = parseInt(gN.value);
    const RandomNumber = Math.ceil(Math.random() * InputNV)
    greeting.innerText = `You chose: ${GuessNV}, the machine of chose: ${RandomNumber}.`;
    
    if(GuessNV == RandomNumber) {
        result.innerHTML = "You Won!";
    } else {
        result.innerHTML = "You Lose!";
    }
};

forms.addEventListener("submit", BtnClick);

// play.addEventListener("submit", BtnClick);

//const randomnumber = aaaaaa[Matn.floor(Math.random() * n]

//function aaaaaaa(bbbbbb=event){
//     bbbbbbb.preventDefault(); //새로고침삭제
// } 
// loginFrom.addEventListener("submit", onLoginSubmit);

// if(parseInt(GuessNV) === parseInt(RandomNumber)) {
//     greeting.innerHTML = `You chose: ${GuessNV}, the machine of chose: ${RandomNumber}.`;
//     //console.log("You Won!");
// } else {
//     greeting.innerHTML = `You chose: ${GuessNV}, the machine of chose: ${RandomNumber}.`;
//     //console.log("You lost!");
// }
// };

// function random(TT){
// const RandomNumber = Math.ceil(Math.random() * InputNV)
// greeting.innerHTML =
//  `You chose: ${GuessNV}, the machine of chose: ${RandomNumber}
//  $ {TT > RandomNumber ? "You win!" : "You lose!"}`;


// }