import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    showSuccessMessage: false,
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;

    // Check if all fields are filled
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Please fill in all fields."); // Alert user to fill all fields
      return; // Exit the function if any field is empty
    }

    // Reset the form fields
    this.setState({
      name: '',
      email: '',
      message: '',
      showSuccessMessage: true,
    });

    // Hide the success message after a few seconds
    setTimeout(() => {
      this.setState({ showSuccessMessage: false });
    }, 3000);
  };

  render() {
    const { name, email, message, showSuccessMessage } = this.state;

    return (
      <div className="form-container">
        <form className="input-container" onSubmit={this.submitForm}>
          <img src="https://icon-library.com/images/profile-icon/profile-icon-4.jpg" alt="profile_image" className='profile'/>
          <div className="input-sec">
            <label className="input-label" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="input-field"
              placeholder='user name'
              value={name}
              onChange={this.onChangeName}
              required
            />
          </div>
          <div className="input-sec">
            <label className="input-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder='email'
              value={email}
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div className="input-sec">
            <label className="input-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="input-field"
              placeholder='message'
              value={message}
              onChange={this.onChangeMessage}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
          {showSuccessMessage && (
            <p className="success-message">Your message has been sent successfully!</p>
          )}
        </form>
      </div>
    );
  }
}

export default ContactForm;
