import './App.css';
import NB from './components/NB.js';
import Textform from './components/Textform.js';


function App() {
  return (
      <>
         <NB title="TextUtils" About="About TextUtils"/> 
          <div className="container">
            <Textform heading="Enter your text here to analyze"/>
          </div>
      </>
  );
}

export default App;
