import './App.css';
import About from './components/About.js';
import NB from './components/NB.js';
import Textform from './components/Textform.js';


function App() {
  return (
      <>
          <NB title="TextUtils" About="About TextUtils"/> 
          {/*
          <div className="container">
            <Textform heading="Enter your text here to analyze"/>
          </div> */}
          <About/>
      </>
  );
}

export default App;
