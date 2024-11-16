let userInput = "";
let buttons = document.querySelectorAll(".button");
let displayConnect = document.querySelector("#display")
buttons.forEach((button) => {
    button.addEventListener("click", (button) => {
        if(button.target.innerText === "="){
            userInput=eval(userInput);
            displayConnect.innerText=userInput;
            displayConnect.value = userInput;
        }else if (button.target.innerText === "AC"){
            userInput = "";
            displayConnect.innerText = "";
            displayConnect.value = "";
        }else if (button.target.innerText === "<>"){
            userInput = userInput.slice(0, -1);
            displayConnect.innerText = userInput;
            displayConnect.value = userInput;
        }else if(button.target.innerText === "+/-"){
            if(userInput[0]==="-"){
                userInput=userInput.slice(1);
                displayConnect.innerText = userInput;
                displayConnect.value = userInput;
            }else{
                userInput = "-"+userInput;
                displayConnect.innerText = userInput;
                displayConnect.value = userInput;
            }
        }else if (button.target.innerText === "x"){
            userInput += "*";
            displayConnect.innerText = userInput;
            displayConnect.value = userInput;
        }
        else{
        userInput+=button.target.innerText ;
        displayConnect.value = userInput;
        displayConnect.innerText = userInput;
        }
    })
    
});

