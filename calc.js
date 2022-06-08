//selectors
const buttons = document.querySelector(".buttons").children
const board = document.querySelector("#board")
const allSymbols = ["+", "-", "*", "/", "=", "."]

//Event Listeners

let firstValue = ""
let secondValue = ""
let symbol = ""


//Functions
for(let button of buttons){
    button.addEventListener("click", () => {
        const{innerText : btnValue} = button
        const btnValueIsSymbol = allSymbols.includes(btnValue)
        
        if(board.innerText){
            
            board.innerText += btnValue
        }
        
    })
}