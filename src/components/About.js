import React, {useState} from 'react'

export default function About() {
  const [btntext, setBtntext] = useState("Enable Dark Mode")
    const [myStyle, setstyle] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const handlemode = (event) => {
        if (btntext === 'Enable Dark Mode') {
            setBtntext('Enable Light Mode');
            setstyle({
                color:'white',
                backgroundColor:'black'
            })
        }
        else {
            setBtntext('Enable Dark Mode');
            setstyle({
                color:'black',
                backgroundColor:'white'
            })
        }
    }

  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About us</h1>
    <div className="accordion accordion-flush" style={myStyle} id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          About Developer
        </button>
        </h2>
       <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
         <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
         </div>
       </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        About Site source code
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        About Contact
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  </div>
  <div className="container my-3 ">
  <button onClick={handlemode} type="button" className="btn btn-outline-secondary my-3">{btntext}</button>
  </div>
</div>
  )
}
