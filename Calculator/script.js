let displayDiv = document.querySelector("#display");
let equation = []
function press(num){
    if(displayDiv.innerText.length >= 13){
        alert("you cannot exceed 13 digits")
        return;
    }
    if (displayDiv.innerText == 0 ||
        displayDiv.innerText == "+"||
        displayDiv.innerText == "-"||
        displayDiv.innerText == "*"||
        displayDiv.innerText == "/"){
        console.log(true);
        displayDiv.innerText = num
    }
    else{
        displayDiv.innerText += num;
    }
}
let OP = ""
function setOP(operator){
    equation.push(parseInt(displayDiv.innerText));
    OP = operator
    displayDiv.innerText = operator
}
function calculate(){
    let solution = 0
    equation.push(parseInt(displayDiv.innerText));
    for (let i = 1; i < equation.length; i++){
        if (OP === "+"){
            solution = equation[i-1] + equation[i]
        }
        else if (OP === "-"){
            solution = equation[i-1] - equation[i]
        }
        else if (OP === "*"){
            solution = equation[i-1] * equation[i]
        }
        else if (OP === "/"){
            solution = equation[i-1] / equation[i]
        }
    }
    displayDiv.innerText = solution;
    if(displayDiv.innerText.length >= 13){
        displayDiv.innerText.length = 13;
        return;
    }
}
function clr(){
    displayDiv.innerText = 0;
    equation = [];
}