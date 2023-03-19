import React, { useState } from 'react'
import Modal from "./Modal"
import img from "./img.jpg"

import "./User.css"
const User = () => {
    const [modal,setModal]=useState(false)

    const handleclick=()=>{
         setModal(true)
    }
    return (
        <>
            <section className='intro-sec'>
                <div className='intro'>
                    <img src={img}  alt='' />
                    <h1 className='h1-here'>Lets <span className='h1-span'>Create a Modal!!!</span></h1>
                    <p className='para'>click button below</p>
                    <button className='btn' onClick={handleclick}>open modal</button>
                    
                </div>
            </section>


            
        </>
    )
}

export default User