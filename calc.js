//selectors
const buttons = document.querySelector(".buttons")
const board = document.querySelector("#board")

//Event Listeners
buttons.addEventListener("click", buttonClick)


//Functions
function buttonClick(e){
    boards = [];
    const item = e.target.innerText
    boards.push(item)
    board.textContent += item
}