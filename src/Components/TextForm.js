import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase button is clicked" + text);
    var newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("LowerCase Button is clicked");
    var newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="conatiner my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          Time taken to read {text.split(" ").length} words is{" "}
          {0.008 * text.split(" ").length}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
