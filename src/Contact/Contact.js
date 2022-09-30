import React from 'react'
import '../index.css';
const Contact = () => {
  return (
    <>
      <div className='box'>
        <h1>Contact</h1>

        <form action="">
          <label htmlFor="fname">First Name</label>
          <input type="text" id='fname' className='inp' />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id='lname' className='inp' />
          <label htmlFor="email">Email *</label>
          <input type="email" id='email' className='inp' required/>
          <label htmlFor="sub">Subject</label>
          <input type="text" id='sub' className='inp' />
          <label htmlFor="msg">Message *</label>
          <textarea name="msg" id="msg" className='inp'></textarea>
          <button className='formButton'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact;