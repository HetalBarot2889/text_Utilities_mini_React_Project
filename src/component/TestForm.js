import React, {useState} from 'react'

export default function TestForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoweClick = () => {
    let newLower = text.toLowerCase();
    setText(newLower);
    props.showAlert("Character convert in to Lower Case..", "warning")
  }
  const handleClearClick = () => {
    let clear = ""
    setText(clear);
  }
  const [text, setText] = useState('Enter your text here!')
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>   
        <div className="mb-3">
            <textarea className="form-control" value={text} 
            style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
             color: props.mode === 'dark' ? 'white' : 'black'}}
             id="myBox" rows="5" onChange={handleOnChange}></textarea>
        </div>
       <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleOnClick}>Convert UpperCase</button>
       <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoweClick}>Convert LowerCase</button>
       <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Case</button>
        <div className='container my-3'style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h2>Your's Word Summary</h2>
          <p>{text.split(" ").filter((el) => {return el.length!==0}).length} words with {text.length} characters</p>
          <p>{0.008 * text.split("").length} minutes read</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
    </div>
    </>
  )
}


