import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA_ZCgY6JNGHNvHDw2dEMhuk1ldw8_uRo0",
  authDomain: "freedom-b8f8c.firebaseapp.com",
  databaseURL: "https://freedom-b8f8c.firebaseio.com",
  projectId: "freedom-b8f8c",
  storageBucket: "freedom-b8f8c.appspot.com",
  messagingSenderId: "634608528478",
  appId: "1:634608528478:web:bdf7669d41dfa0fdfdd8cf",
  measurementId: "G-2268V0Z711"
};

firebase.initializeApp(firebaseConfig);


function App() {
  //console.log(process.env.REACT_APP_API_URL);

  const { register, handleSubmit, errors } = useForm();
  // callback function for check eligibility.
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="idocForm">
        <p>Use IDOC numbers: A00147, A00367, A01054</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="IDOC Number" name="IDOC_Number" inputRef={register({required: true})} />
          { errors.IDOC_Number && <p>IDOC Number is required.</p> }
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
        <div id="jsonData"></div>
      </div>
    </div>
  );
}

export default App;