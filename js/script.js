"use strict";

const btn = document.querySelector('button');

btn.addEventListener('click',
function()
{
    const squareContainer = document.getElementById('grid_container');
    // reset griglia al click
    squareContainer.innerHTML = '';
    
    // generare n numeri elementi
    let difficulty = document.getElementById('difficulty').value;
    let squareNumber = parseInt(difficulty);
    
    // generare n numeri random per le bombe
    const bombNumber = 16;

    const bombs = [];
    while(bombs.length < bombNumber)
    {
        let bombRandomRange = getRndInteger(1, squareNumber);
        if(!bombs.includes(bombRandomRange))
        {
            bombs.push(bombRandomRange);
        }
    }

    console.log(bombs);
    
    for(let i = 1; i <= squareNumber; i ++)
    {
        let square = getSquare(i, squareNumber, bombs);
        squareContainer.append(square)
    };
    
});

function getSquare(squareIndex, squareNumber, bombs)
{
    // creare elementi e applicare lo sitle
    const square = document.createElement('div');
    let squareHeight = Math.sqrt(squareNumber)
    
    square.classList.add('square');
    square.innerHTML = squareIndex;
    square.style.height = `calc(100% / ${squareHeight})`

    // cambio sfondo al click
    square.addEventListener('click', ()=>
    {
        console.log(square.innerText);
        if(bombs.includes(squareIndex))
        {
            square.classList.add('bomb');
        }
        else
        {
            square.classList.add('active');
        }
        
        console.log(squareIndex)
    });
    return square;
};
