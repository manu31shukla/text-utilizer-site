import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';

function App() {
  return (
    <> 
   <Navbar title="My App"/>
   <div className="container my-3">
   {/*<TextForm heading="Enter Text to analyze here"/>*/}
   <About/>
   </div>
    </>
  );
}

export default App;
