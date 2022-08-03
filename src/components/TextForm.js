import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + Text );
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success");
  }

  const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + Text );
    let newText = Text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Lowercase!", "success");
   }

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = Text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("your text has been reversed!", "success");
  }

  const handleClearText = () =>{
    let newText = " ";
    setText(newText)
    props.showAlert("cleared Text!", "success");
  }


  const handleOnChange = (event) =>{
      // console.log("On change" );
      setText(event.target.value)
  }   

  const [Text, setText] = useState("");
  return (
    <>
  <div className="container" style={{color: props.mode === "dark"? "white":"#042734"}}>
  
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"? "grey":"white",color: props.mode === "dark"? "white":"#042734"}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse Text</button>
  <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
  </div>
   <div className="conatiner my-3" style={{color: props.mode === "dark"? "white":"#042734"}}>
     <h2>your text summary</h2>
    <p>{Text.length>0 ? Text.trim().split(" ").length : 0}</p>
    <p>{0.008 * Text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{Text.length>0?Text:"Enter something in the text box above to preview it here"}</p>
  </div>
  </>
  )  
  }


