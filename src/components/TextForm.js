import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Hello World");
  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclClick = () => {
    let newText = " ";
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">
        <h1>{props.heading}</h1>
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        value={text}
        onChange={handleOnChange}
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      ></textarea>
      <button
        className="btn btn-primary my-3 mx-3 font-weight-bold"
        onClick={handleUPClick}
      >
        Convert to UPPERCASE
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleloClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleclClick}>
        Click to clear
      </button>
      <div className="container">
        <p>{text.length<=1?"Enter text":`There are ${text.length-1} characters`}</p>
        <p>{text.length>1?`Words : ${text.split(" ").length-1}`:"Enter Text"}</p>
        <p>{text.length>2?`You will need ${text.split(" ").length * 0.025.toFixed(2)} secs to read Words`:"Enter text"}</p>
      </div>
    </div>
  );
}
