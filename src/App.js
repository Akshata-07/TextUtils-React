import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter, Route,Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light"); // WETHER DARK MODE IS ENABLED OR NOT
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode=== "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042734"
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = ""
      showAlert("Light mode has been enabled", "success");
    }
  }
    return (
      <>
        {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

        
        {/* <Routes> */}
          
          {/* <Route path="/about" element={<About />}> */}
          {/* </Route> */}
          {/* <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
          {/* </Route> */}
          {/* </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter text to analyze"  mode={mode} />
          </div>  
          
        
         {/* </BrowserRouter> */}
      
      </>
        
      
    );
}

export default App;
