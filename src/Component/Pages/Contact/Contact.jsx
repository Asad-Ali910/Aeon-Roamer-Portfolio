import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // To show success or error status

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Form validation logic
  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      return 'All fields are required!';
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address!';
    }
    return null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationMessage = validateForm();
    if (validationMessage) {
      setStatus({ type: 'error', message: validationMessage });
      return;
    }

    try {
      // Attempt to send data (This part can be replaced by an actual API call if you have a backend)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after submission
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      // If an error occurs, show the fallback message with the email
      setStatus({
        type: 'error',
        message: (
          <>
            <p>An error occurred while sending your message.</p>
            <p className="text-lg font-medium mt-4">
              Please contact us directly at{' '}
              <a href="mailto:aeonroamergaming@gmail.com" className="text-[#ffb703] font-semibold">
                aeonroamergaming@gmail.com
              </a>
              {' '}for assistance.
            </p>
          </>
        ),
      });
    }
  };

  return (
    <div className="bg-[#0a192f] text-[#48cae4] min-h-screen py-16">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-5xl font-semibold">Contact Me</h1>
        <p className="text-lg mt-4">I’d love to hear from you! Feel free to reach out with any questions or ideas.</p>
        <p className="mt-4">
          For immediate inquiries, you can email me directly at{' '}
          <a href="mailto:aeonroamergaming@gmail.com" className="text-[#ffb703] font-semibold">
          aeonroamergaming@gmail.com
          </a>
        </p>
      </header>

      {/* Form Section */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <form onSubmit={handleSubmit} className="bg-[#112240] p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-xl font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-3 bg-[#1a2b3d] text-[#48cae4] border border-[#48cae4] rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-xl font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-3 bg-[#1a2b3d] text-[#48cae4] border border-[#48cae4] rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-xl font-semibold">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-2 w-full p-3 bg-[#1a2b3d] text-[#48cae4] border border-[#48cae4] rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-xl font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full p-3 bg-[#1a2b3d] text-[#48cae4] border border-[#48cae4] rounded-lg"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#ffb703] text-[#0a192f] rounded-lg text-xl font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Feedback Status */}
        {status && (
          <div className={`mt-6 text-center ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {status.message}
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
