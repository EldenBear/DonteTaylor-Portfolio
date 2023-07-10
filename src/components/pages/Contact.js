import React, {useState} from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

	const [errorMessage, setErrorMessage] = useState("");

  function validateEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }
  function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setEmail(e.target.value);
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
      if (e.target.name === "Name") {
        setName(e.target.value);
      } else if (e.target.name === "Message") {
        setMessage(e.target.value);
      } 
		}
	}


  return (
    <div className='body'>
      <h1 id='contactText'>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label for="Name" className='contact-text'>Name:</label>
          <br />
          <input type="text" name="Name" onBlur={handleBlank} defaultValue={name} id='nameInput' />
        </div>
        <div>
          <label for="email" className='contact-text'>Email address:</label>
          <br />
          <input type="email" name="email" onBlur={handleChange} defaultValue={email} id='emailInput' />
        </div>
        <div>
          <label for="Message" className='contact-text'>Message:</label>
          <br />
          <textarea name="Message" rows="5" onBlur={handleBlank} defaultValue={message} id='messageInput'></textarea>
          </div>
          {errorMessage && (
						<div>
							<p className="contact-text">{errorMessage}</p>
						</div>
					)}
          <button type="submit" id='submitButton'>Submit</button>
      </form>
    </div>
  );
}
