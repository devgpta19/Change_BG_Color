import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState();

  return (
    <div
      className='w-full h-screen text-center duration-200 fixed flex flex-wrap justify-center'
      style={{ backgroundColor: color || "black" }}
    >
      <div className='bottom-5 gap-10 p-1 shadow-lg rounded fixed flex flex-wrap justify-center px-5 bg-white'>
        <button onClick={()=>setColor("violet")} className='outline-none h-10 w-10 rounded-full px-2 p-1 'style={{backgroundColor:"violet"}} ></button>
        <button onClick={()=>setColor("indigo")} className='outline-none h-10 w-10 rounded-full px-2 p-1 'style={{backgroundColor:"indigo"}} ></button>
        <button onClick={()=>setColor("blue")} className='outline-none h-10 w-10 rounded-full px-2 p-1 'style={{backgroundColor:"Blue"}} ></button>
        <button onClick={()=>setColor("green")} className='outline-none h-10 w-10 rounded-full px-2 p-1 'style={{backgroundColor:"Green"}} ></button>
        <button onClick={()=>setColor("yellow")} className='outline-none h-10 w-10 rounded-full px-2 p-1 'style={{backgroundColor:"Yellow"}} ></button>
        <button onClick={()=>setColor("orange")} className='outline-none h-10 w-10 rounded-full px-2 p-1 'style={{backgroundColor:"orange"}} ></button>
        <button onClick={()=>setColor("red")} className='outline-none h-10 w-10 rounded-full px-2 p-1 'style={{backgroundColor:"red"}} ></button>
      </div>
    </div>
  );
}

export default App;
