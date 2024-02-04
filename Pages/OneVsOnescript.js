let title = document.querySelector('.title');
let turn = 'x' ;
let squares = [] ;
let gameEnded = false;

function game(id) {
    let element = document.getElementById(id);

    if (gameEnded) {
        // If the game has already ended, return without making any moves
        return;
    }

    if(turn === 'x' && element.innerHTML=='') {
        element.innerHTML = 'x' ;
        turn='o' ;
        title.innerHTML='O turn';
    }

    else if (turn === 'o' && element.innerHTML=='') {
        element.innerHTML = 'o' ;
        turn='x' ;
        title.innerHTML='X turn';
    }
    
    winner();

;}

function winner() {
    for (let i=1 ; i<10 ;i++) {
        squares[i]=document.getElementById('item'+i).innerHTML;
    }

    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!='') {
        title.innerHTML = `${squares[1]} is the winner!`;
        document.getElementById('item'+1).style.background="#FFFF00" ;
        document.getElementById('item'+2).style.background="#FFFF00" ;
        document.getElementById('item'+3).style.background="#FFFF00" ;
        gameEnded = true;
    }

    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!='') {
        title.innerHTML = `${squares[4]} is the winner!`;
        document.getElementById('item'+4).style.background="#FFFF00" ;
        document.getElementById('item'+5).style.background="#FFFF00" ;
        document.getElementById('item'+6).style.background="#FFFF00" ;
        gameEnded = true;
    }

    else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!='') {
        title.innerHTML = `${squares[7]} is the winner!`;
        document.getElementById('item'+7).style.background="#FFFF00" ;
        document.getElementById('item'+8).style.background="#FFFF00" ;
        document.getElementById('item'+9).style.background="#FFFF00" ;
        gameEnded = true;
    }

    else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[7]!='') {
        title.innerHTML = `${squares[1]} is the winner!`;
        document.getElementById('item'+1).style.background="#FFFF00" ;
        document.getElementById('item'+4).style.background="#FFFF00" ;
        document.getElementById('item'+7).style.background="#FFFF00" ;
        gameEnded = true;
    }

    else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!='') {
        title.innerHTML = `${squares[2]} is the winner!`;
        document.getElementById('item'+2).style.background="#FFFF00" ;
        document.getElementById('item'+5).style.background="#FFFF00" ;
        document.getElementById('item'+8).style.background="#FFFF00" ;
        gameEnded = true;
    }
    

    else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!='') {
        title.innerHTML = `${squares[3]} is the winner!`;
        document.getElementById('item'+3).style.background="#FFFF00" ;
        document.getElementById('item'+6).style.background="#FFFF00" ;
        document.getElementById('item'+9).style.background="#FFFF00" ;
        gameEnded = true;
    }

    else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!='') {
        console.log("win7");title.innerHTML = `${squares[1]} is the winner!`;
        document.getElementById('item'+1).style.background="#FFFF00" ;
        document.getElementById('item'+5).style.background="#FFFF00" ;
        document.getElementById('item'+9).style.background="#FFFF00" ;
        gameEnded = true;
    }
    else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!='') {
        title.innerHTML = `${squares[3]} is the winner!`;
        document.getElementById('item'+3).style.background="#FFFF00" ;
        document.getElementById('item'+5).style.background="#FFFF00" ;
        document.getElementById('item'+7).style.background="#FFFF00" ;
        gameEnded = true;
    }

}
