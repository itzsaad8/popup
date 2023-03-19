// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import img from "./components/img.jpg"
import Modal from './components/Modal';
import Tabs from './components1/Tabs';
function App() {
  const[showmodal,setShowmodal]=useState(false)
  const togglemodal =()=>{
    setShowmodal(true)
  };
  const handleclose=(e)=>{
    if(e.target.classList.contains("ms")){

      setShowmodal(false)
    }
  };
  return (
    <>
      <section className='intro-sec'>
        <div className='intro'>
          <img src={img} alt='' />
          <h1 className='h1-here'>Lets <span className='h1-span'>Create a Modal!!!</span></h1>
          <p className='para'>click button below</p>
          <button className='btn'  onClick={togglemodal}>open modal</button>
          

        </div>
      </section>
      {showmodal && <Modal closemodal={handleclose}/> }
      <Tabs/>
    </>
  );
}

export default App;
