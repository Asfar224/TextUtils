import React, { useState } from 'react'

export default function Textform(props) {

    const handleupcase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const handlelowcase= () =>{
        let lowcasetext= text.toLowerCase();
         setText(lowcasetext);
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className="Container">
                <h1 style={{marginTop : '20px'}}>{props.heading}</h1>
                <div className="mb-3">
                    <label for="mybox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleupcase}  >Convert to Uppercase</button>
                <button className="btn btn-primary" onClick={handlelowcase}  style={{marginLeft:'15px'}}>Convert to Lowercase</button>
            </div>
            <div className="Container" >
                <h1 style={{marginTop : '15px'}}>
                    Your text analytics are :
                </h1>
                <table style={{borderCollapse :'collapse', width :'20%', marginTop :'15px'}}>
                    <thead>
                        <tr>
                            <th>WORDS</th>
                            <th>CHARACTERS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{text.split(" ").length}</td>
                            <td>{text.length}</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{fontWeight :'600', marginTop:'15px'}}>- Time needed to read this text is : {0.008 * text.split(" ").length} seconds</p>
  
            </div>
        </>
    )
}
