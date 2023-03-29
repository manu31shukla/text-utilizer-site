import React , {useState} from 'react'

export default function TextForm(props) {
  const test = (text) => { 
    if (text.length === 0) 
     {
     return 'String should not be empty!'
    }
     if (typeof text !== 'string')
      {
        return 'It must be a string.'
      }
    const data = text.split(' ')
   if (data.length < 2) {
     return data[0]
   }
    const words = text.split(' ')
   if (words.length < 2) {
     return words[0]
   }
   const temp = {}
   words.forEach(word => {
     temp[word.toLocaleLowerCase()] = temp[word.toLocaleLowerCase()] + 1 || 1
   })
   const max = Object.keys(temp).reduce((n, word) => {
     if (temp[word] > n.count) 
     { 
       return { word, count: temp[word] } 
     } 
     else 
     { 
       return n 
     }
   }, { word: '', count: 0 })
   return max.word
 }
 const handleExtraSpaces =  () => {
  let newText =  text.split(/[ ]+/);
  setText(newText.join(" "))
 }
   const handleCopy= ()=> {
    console.log("Text is copied");
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);

   }
    const handleUpperCaseClick= ()=> {
            console.log("Upper case was clicked"+ text);
            let newText = text.toUpperCase();
            setText(newText)
    }
    const handleLowerCaseClick= ()=> {
        console.log("Lower case was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
}
    const handleFreq= ()=> {
         console.log("most frequent phrase is checked");
         
       let newText = text.test();
            setText(newText)    
  
    }
    const handleClear= ()=> {
  console.log("cleared");
  
  setText("")
  }
    
    const handleOnchange= (event)=> {
        console.log("On change");
        setText(event.target.value);
}
    const[text, setText]= useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" value=  {text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
       <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
       <button className="btn btn-primary mx-2" onClick={handleFreq}>Most frequent phrases</button>
       <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

   </div>
    <div className="container" my-4>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters </p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
