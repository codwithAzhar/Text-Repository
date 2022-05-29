import './App.css';
import About from './compnont/About';
import Navbar  from './compnont/Navbar';
import TextForm from './compnont/TextForm';
import React, { useState } from 'react';
import Aleart from './compnont/Aleart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
const[alert, setAlert]=useState(null) 

const showAlert= (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
    
  }, 1500);
}

  const [mode, setMode] = useState("light")
  const togglemode = ()=>{
    if(mode === "light"){
      setMode("dark")
     document.body.style.backgroundColor="grey";
     showAlert("dark mode is enable","success")
     document.title="textUtiles- dark mode enable"
     setInterval(()=>{
      document.title="textUtiles- is inosent app"
     },2000);

     setInterval(()=>{
      document.title="textUtiles- install this web "
     },1500);
    }
    
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("light mode is enable","success")
      document.title="textUtiles- light mode enable"



    }
  }
 
 
  return (

    <>
    <Router>
    
         <Navbar title="TextUtiles" about="About" mode={mode} togglemode={togglemode} />
          <Aleart alert={alert}/>
     <Switch>
      <Route>
        <div className='container my-2'>
        <Route exact path="/home">
        <TextForm showAlert={showAlert} mode={mode} heading="Enter the text anilize to below"/>
        </Route> 
        <Route exact path="/about">
          <About/>
        </Route>
        </div>
      </Route>
    </Switch>
    </Router>        
   </>
  );
}
export default App;
