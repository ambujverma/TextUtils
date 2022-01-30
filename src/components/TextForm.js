import React, { useState } from 'react';




export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked " + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UpperCase","success");
    }
    const handleLoClick = ()=>{
        // console.log("uppercase was clicked " + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to LowerCase","success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    const [text,setText] = useState(' ');
    // text="new twxt"; // wrong way to change the state
    // setText("new text"); // righ way to change the state
  return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}> 
            <h1 >{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                
                 

        </div>
        <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length}</p>
            <p>{ 0.008 * text.split(" ").length} Minutes</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter somthing above to preview"}</p>
        </div>
        </>
  );
}
