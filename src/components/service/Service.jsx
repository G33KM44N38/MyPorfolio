import React from 'react'
import './Service.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Frontend</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Make static page</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>make dynamique page</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>responsive web page</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>change the appaerence of your page according to your purpose</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND */}
        <article className='service'>
          <div className="service_head">
            <h3>Backend</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Handle different user</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Knowledge of APIs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service