const container = document.getElementById('container');
const leftSide = document.querySelector('#leftSide');
let square = document.getElementById('square');

const btn = document.createElement("button");
btn.textContent = "Start here!";
buttons.appendChild(btn);

const modal = document.getElementById("popupModal");
const closeBtn = document.querySelector(".close");
const submitBtn = document.getElementById("submitInput");
const userInput = document.getElementById("userInput");

let numberAnswer = 0;

const btn2 = document.createElement("button");
btn2.id = "randomizeButton";
btn2.textContent = "Randomize colors!";
buttons.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.id = "fadeButton";
btn3.textContent = "Fade!";
buttons.appendChild(btn3);


btn.addEventListener("click", () => {
    useRandomColor = false;
    modal.style.display = "block"; 
    userInput.focus();
});

            
function createSquares() {
        let rows = document.createElement('div');
        rows.style.display = "flex";
        rows.style.flexDirection = "row";
        container.appendChild(rows);
        for (let i = 0; i < numberAnswer; i++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.style.color = 'blue';
            square.style.backgroundColor = 'lightgray';
            square.style.border = '1px solid black';
            square.style.width = (568 / numberAnswer) + "px";
            square.style.height = (568 / numberAnswer) + "px";
            rows.appendChild(square);
            }   
};

    

function repeat(numberAnswer) {
    container.innerHTML = "";
    for (let i = 0; i < numberAnswer; i++) {
        createSquares() }
        color()
    }

let useRandomColor = false;
        
btn2.addEventListener("click", () => {
    useRandomColor = true;
            container.innerHTML = "";
            for (let i = 0; i < numberAnswer; i++) {
                createSquares() }
            let squares = document.querySelectorAll('.square');
            squares.forEach((square) => square.addEventListener(
                "mouseover",
                (event) => {
                    event.target.style.backgroundColor = getRandomColor();
                    }
                   
                )
            )
            
})
    

btn3.addEventListener("click", () => {
    container.innerHTML = "";
    for (let i = 0; i < numberAnswer; i++) {
        createSquares() }
    let squares = document.querySelectorAll('.square');
            squares.forEach((square) => square.addEventListener(
                "mouseover",
                (event) => {
                if (useRandomColor) {
                    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

                    event.target.style.backgroundColor = randomColor;
                } else {
                    event.target.style.backgroundColor = "blue";
                }   
                    
                    setTimeout(() => {
                    event.target.style.backgroundColor = "lightgray";
                    }, 1500);
                }
            ))
        });
        
    


function submit() {
    if (!isNaN(numberAnswer) && numberAnswer > 0 && numberAnswer < 76) {
        modal.style.display = "none"; // Close the modal
        repeat(numberAnswer); // Create squares based on user input
    } else {
        alert("Please enter a valid number!");
    }
};


submitBtn.addEventListener("click", () => {
    let answer = userInput.value;
    numberAnswer = Number(answer);

   submit();
   userInput.value = "";
});

userInput.addEventListener("keydown", function(event) {
    let answer = userInput.value;
    numberAnswer = Number(answer);
    
    if (event.key === 'Enter') {
    
    submit();
    userInput.value = "";
    
    }
});


function color() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.addEventListener(
        "mouseover",
        (event) => {
            event.target.style.backgroundColor = "blue";
            }
        )
    )
};

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Close modal
});


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  btn2.addEventListener("click", () => {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.addEventListener(
        "mouseover",
        (event) => {
            event.target.style.backgroundColor = getRandomColor();
            }
        )
    )
});
