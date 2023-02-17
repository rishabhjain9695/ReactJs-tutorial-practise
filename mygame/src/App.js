import logo from './logo.svg';
import './App.css';
import Hello from './HelloMsg';

function App() {
  const  name1="Rishabh";
  const  nme2="s";
  const  name3="Sanchit";
  return (
    <>
     <Hello name={name1} age="12">
     <p>children1</p>
     </Hello>
     <Hello name={nme2} age="22">
     <button>click header</button>
     </Hello>
     <Hello name={name3} age="12">
       <button>clickhre eeeeeeeeeee</button>
     </Hello>
   
    </>
  );
}

export default App;
