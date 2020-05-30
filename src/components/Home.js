import React, { useState } from 'react';

export default function Home() {

  const [idocNum, setIdocNum] = useState("");

  const handleChange = (event) =>{
    setIdocNum(event.target.value);
  }

  const handleSubmit = (event) =>{
    // console.log(idocNum);
    if (idocNum === 'A00147' || idocNum === 'A00367' || idocNum === 'A01054')
      document.getElementById("Data").innerHTML = idocNum;
    else 
      document.getElementById("Data").innerHTML = 'illegal';
    event.preventDefault();
  }

  return (
    <div className="App">
      <div className="idocForm">
        <h5>Use IDOC numbers: A00147, A00367, A01054</h5>
        <form onSubmit={handleSubmit}>
          <label>
            IDOC number:
            <input data-testid="idocNumberInput" type="text" onChange={handleChange}/>
          </label>
          <input data-cy="submitBtn" data-testid="submitBtn" type="submit" value="Submit"/>
        </form>
        <div data-cy="Data" data-testid ="Data" id="Data"></div>
      </div>
    </div>
  );
}