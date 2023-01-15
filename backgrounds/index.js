let used = []

function randomBackground(){
    let num = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    
    if (used.length == 5 -1){
        used.length = 0
    }
    
    if (!used.includes(num)){
        document.getElementById('frame').setAttribute('src', `./${num}.html`);
    } else {
        randomBackground()
    }
}


randomBackground()

