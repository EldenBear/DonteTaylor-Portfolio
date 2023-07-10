import React from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  return (
    <div className='body'>
      <h1 id='contactText'>Contact Page</h1>
      <form id="contact-form">
        <div>
          <label for="Name">Name:</label>
          <br />
          <input type="text" name="Name" value="" />
        </div>
        <div>
          <label for="email">Email address:</label>
          <br />
          <input type="email" name="email" value="" />
        </div>
        <div>
          <label for="Message">Message:</label>
          <br />
          <textarea name="Message" rows="5"></textarea>
          </div>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}
