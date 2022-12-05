import React from 'react';
import './HoverBoard.css'
import bup from './bup.mp3'


const go =()=> {

    const bu = () => {
        const a = new Audio();
        a.src = bup;
        a.autoplay = true;
    }

    const container = document.getElementById('container')!;
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', 'white']
    const SQUARES = 2000

    for (let i = 0; i < SQUARES; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.addEventListener('mouseover', () => setColor(square))
        square.addEventListener('touchmove', () => setColor(square))
        square.addEventListener('touchend', () => removeColor(square))
        square.addEventListener('mouseout', () => removeColor(square))
        container.appendChild(square)
    }

    function setColor(element: HTMLElement) {
        const color = getRandomColor()
        element.style.background = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        bu()
    }

    function removeColor(element: HTMLElement) {
        element.style.background = '#1d1d1d'
        element.style.boxShadow = '0 0 2px #000'
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }
}

function Game() {
    return (
        <>
            <div className='container' id='container'>
            </div>
            <button onClick={()=>{go()}}>go
            </button>
        </>
    );
}

export default Game;