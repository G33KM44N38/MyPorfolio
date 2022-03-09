import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>
        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">

              <article className='experience_details'>
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
             </article>

              <article className='experience_details'>
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
             </article>

              <article className='experience_details'>
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>JAVASCIPT</h4>
                  <small className='text-light'>Experienced</small>
                </div>
             </article>

              <article className='experience_details'>
                <BsFillPatchCheckFill className="experience_details-icon"/>
                <div>
                  <h4>REACT</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
             </article>

           </div>
          </div>

          {/* END OF FRONTEND */}

          <div className="experience_backend">
            <h3>Backend Development</h3>
              <div className="experience_content">

                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details-icon"/>
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>intermediate</small>
                  </div>
               </article>

                <article className='experience_details'>
                  <BsFillPatchCheckFill className="experience_details-icon"/>
                  <div>
                    <h4>MongoDB</h4>
                    <small className='text-light'>Basic</small>
                  </div>
               </article>
            </div>
          </div>
        </div>
      </h2>
    </section>
  )
}

export default Experience