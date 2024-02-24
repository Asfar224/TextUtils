import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import NB from './components/NB.js';
import Textform from './components/Textform.js';


function App() {

    const [mode,setmode] = useState('light');

     const Changemode = () => {
         if(mode === 'light'){
            setmode('dark');
            document.body.style.backgroundColor ='grey'
         }
        else{
          setmode('light');
          document.body.style.backgroundColor ='white'
       }
    }

  return (
        <div  className = "App" >
          <NB title="TextUtils" About="About TextUtils" changemode={Changemode} theme={mode}/> 
          <div className="container">
            <Textform heading="Enter your text here to analyze" theme={mode} />
          </div> 
          {/* <About/> */}
         </div>
  );
}

export default App;
