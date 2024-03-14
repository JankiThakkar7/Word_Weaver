import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Word Weaver" about="About Word Weaver"/>
    <div className="container my-5">
      <TextForm heading="Enter the text to analyze below" />
      {/* <About /> */}
    </div>
    
    </>
  );
}

export default App;
