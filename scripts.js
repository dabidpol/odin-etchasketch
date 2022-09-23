const container = document.querySelector('#container');

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

createGrid();