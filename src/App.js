import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TestForm from './component/TestForm';
import Alert from './component/Alert';


export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#6c757d';
      showAlert("Dark mode is on","success")
      document.title = 'TextUtiles- Dark Mode';
    } else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is on","success")
      document.title = 'TextUtiles- Light Mode';
    }
  }
  return (
    <>
  <Router>
  <Navbar title="TestUtilitis" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
    <Switch> 
          <Route exact path="/">
          <TestForm  showAlert={showAlert} heading="Enter your Text Here..." mode={mode}/>
          </Route>
          <Route exact path="/about">
          <About />
          </Route>
          </Switch>
  </div>
  </Router>
  </>
  );
}


