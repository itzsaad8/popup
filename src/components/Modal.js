import React from 'react'
import "./Modal.css"
import { AiFillCloseCircle,AiOutlineInfoCircle } from "react-icons/ai"
const Modal = ({closemodal}) => {
    return (
        <section className='modal-sec ms' onClick={closemodal}>
            <div className='modal'>
                <div className='modal-con'>
                    
                    <AiFillCloseCircle color='red' size={16} className="close-icon ms" onClick={closemodal}/>
                    
                <div className='modal-head'>
                    <AiOutlineInfoCircle color="red" size={13} className="info-icon"/>
                    <h3>Do you want to continue?</h3>
                </div>
                <div className='modal-bod'>
                    <p> hi therehi therehi therehi therehi therehi therehi therehi therehi therehi there
                    hi therehi therehi therehi therehi therehi there
                    </p>
                </div>
                <div className='modal-footer'>
                    <button className='btn1 ms' onClick={closemodal}>cancel</button>
                    <button className='btn2'>proceed</button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Modal