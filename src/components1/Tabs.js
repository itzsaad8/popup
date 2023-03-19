import {useState} from 'react'
import "./Tabs.css"
const Tabs = () => {
     
    const [tabindex,setTabindex]=useState(1)
    const handleindex=(index)=>{
        setTabindex(index)
    }

  return (
    
   <section className='tabs-sec'>
       <div className='container'>

        <div className='tabs-heading'>
            <h2 className='heading'>MORE ABOUT US</h2>
            <p>Details about us are below : ✔</p>
        </div>
        <div className='tabs'>
            <div className='tabs-title'>

                <button
                 className={tabindex === 1 ?'tab-btn active-tab': "tab-btn"}
                  onClick={()=>handleindex(1)}>
                    Who we are
                    </button>


                <button 
                className={tabindex === 2 ?'tab-btn active-tab': "tab-btn"}
                  onClick={()=>handleindex(2)}>
                    What we do
                    </button>


                <button className={tabindex === 3 ?'tab-btn active-tab': "tab-btn"}
                  onClick={()=>handleindex(3)}>
                    Get in touch
                    </button>
            </div>
            <div className='tabs-content'>
                <article className={tabindex ===1 ?"content active-content" :"content"}>
                    <h4>Who We Are?</h4>
                    <p>we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you-we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you--we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you-we  </p>
                </article>
                <article className={tabindex ===2 ?"content active-content" :"content"}>
                    <h4>What We Do?</h4>
                    <p>we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you-we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you--we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you-we  </p>
                </article>
                <article className={tabindex ===3 ?"content active-content" :"content"}>
                    <h4>Get In Touch?</h4>
                    <p>we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you-we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you--we are frontend web developer . how can we help you. we are frontend web developer . how can we help youwe are frontend web developer . how can we help youwe are frontend web developer . how can we help you-we  </p>
                </article>
            </div>
        </div>
       </div>
   </section>
  )
}

export default Tabs