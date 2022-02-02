
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light'); // whether dark mode is anabled or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(()=>{
            setAlert(null);
        },1500);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#0c0c34";
      showAlert("Dark Mode is Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enabled","success");
    }

  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
        <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes> 
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} /> */}
    </div>
    </Router>
    </>
  );
}

export default App;


