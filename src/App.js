import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About TextUtils"/>
    <div className="container my-5">
      <TextForm heading="Enter the text to analyze below" />
    </div>
    
    </>
  );
}

export default App;
