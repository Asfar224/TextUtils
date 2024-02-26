import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import NB from './components/NB.js';
import Textform from './components/Textform.js';
import Check from './components/Check.js';


function App() {

    const [mode,setmode] = useState('light');
    const [alert,setalert] = useState(null);

     const Changemode = () => {
         if(mode === 'light'){
            setmode('dark');
            document.body.style.backgroundColor ='grey'
            changealert("Dark mode has been enabled!","success")
         }
        else{
          setmode('light');
          document.body.style.backgroundColor ='white'
          changealert("Light mode has been enabled!","success")
       }
    }

    const changealert = (message, type)=>{
      setalert({
            msg : message,
            type : type
      })
        setTimeout(() => {
           setalert(null);
        }, 1500);
    }

  return (
        <div  className = "App" >
          <NB title="TextUtils" About="About TextUtils" changemode={Changemode} theme={mode}/> 
          <Check alert={alert}/>
          <div className="container">
            <Textform heading="Enter your text here to manipulate" theme={mode} changealert={changealert}/>
          </div> 
          {/* <About/> */}
         </div>
  );
}

export default App;
