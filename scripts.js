const container = document.querySelector('.container');

createGrid = () => {
    
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('div');
            div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'blue';
        })
        container.appendChild(div); 
    }
    };

function reset(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}


function apply(){
    reset();
    let entered = parseInt(getEnteredNumber());
    let size = entered * entered;
    container.setAttribute('style', `grid-template-columns: repeat(${entered}, 2fr); grid-template-rows: repeat(${entered}, 2fr);`);
    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.classList.add('div');
            div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'blue';
        })
        container.appendChild(div); 
    }
}



function getEnteredNumber(){
    const n = document.getElementById("enteredNumber").value;
    console.log(n);
    if (n<=64){
        return n;
    }else{
        alert("Entered number is greater than 64, \n Please enter a smaller number");
    }
    
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }

  function applyRandomColor(){
    reset();
    let entered = parseInt(getEnteredNumber());
    let size = entered * entered;
    container.setAttribute('style', `grid-template-columns: repeat(${entered}, 2fr); grid-template-rows: repeat(${entered}, 2fr);`);
    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.classList.add('div');
            div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randomColor();
        })
        container.appendChild(div); 
    }
}

createGrid();