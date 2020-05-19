import React, { useState } from 'react';
import return_eligibility from '../check-eligibility';
import { useForm } from 'react-hook-form';
import { TextField, Button, Checkbox, Grid, FormControlLabel, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { green, red } from '@material-ui/core/colors';
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom'

export default function Home() {

  const [idocNum, setIdocNum] = useState("");

  const handleChange = (event) =>{
    setIdocNum(event.target.value);
  }

  const handleSubmit = (event) =>{
    // console.log(idocNum);
    if (idocNum === 'A00147' || idocNum === 'A00367' || idocNum === 'A01054')
      document.getElementById("Data").innerHTML = 'bilibili';
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
          <input data-testid="submitBtn" type="submit" value="Submit"/>
        </form>
        <div data-testid ="Data" id="Data"></div>
      </div>
    </div>
  );
}