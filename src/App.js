// import logo from './logo.svg'
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
    <Navbar title="Textify" aboutUs="About Us"/>
    <TextArea headLine="Enter your text to modify"/>
    </>
  );
}

export default App;
