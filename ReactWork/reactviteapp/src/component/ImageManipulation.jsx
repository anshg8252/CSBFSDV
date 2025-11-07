import React, { useState } from 'react'
import cat from './cat.png'

function ImageManipulation() {
    const [imgHeight, setImgHeight] = useState(200);
    const [imgWidth, setImgWidth] = useState(200);
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    const [rangle, setRangle] = useState(0);

    function increaseHeight(){
        setImgHeight(imgHeight + 20);
    }

    function decreaseHeight(){
            setImgHeight(imgHeight - 20);
    }

    function increaseWidth(){
        setImgWidth(imgWidth + 20);
    }

    function decreaseWidth(){
            setImgWidth(imgWidth - 20);
    }

    function changeBgColor(){
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }

    function imgrotate(){
        setRangle(rangle + 45);
    }

    return (
        <div>
            <h2>Image Manipulation</h2>
            <div style={{border: '2px solid black', height: '450px', margin: '0px auto'}}>
                <img src={cat} height={imgHeight} width={imgWidth} alt="Cat image" style={{paddingTop: '70px', paddingLeft: '70px', backgroundColor: `rgb(${red},${green},${blue})`, transform: `rotate(${rangle}deg)`}} />
            </div>
            <div>
                <button onClick={increaseHeight}>Increase Height</button>
                <button onClick={decreaseHeight}>Decrease Height</button>
                <button onClick={increaseWidth}>Increase Width</button>
                <button onClick={decreaseWidth}>Decrease Width</button>
                <button onClick={changeBgColor}>Change Background Color</button>
                <button onClick={imgrotate}>Image Rotate</button>
                <div>
                    <h2>Image Height: {imgHeight}</h2>
                    <h2>Image Width: {imgWidth}</h2>
                </div>
            </div>
        </div>
    )
}

export default ImageManipulation