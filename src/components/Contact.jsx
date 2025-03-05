import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailjs.init("oKgPnfJa-zam4-n3J");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const formData = {
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      message: form.current.message.value,
      reply_to: form.current.user_email.value
    };

    console.log('Sending email with data:', formData);

    emailjs.send(
      'college3639T@',  
      'template123',  
      formData,
      'oKgPnfJa-zam4-n3J' 
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus('success');
        form.current.reset();
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('error');
        setErrorMessage(error.text || 'Failed to send message');
      });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="contact">
      <div className="max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 text-gray-800">
          Get In Touch
        </h2>
        
        <form ref={form} onSubmit={sendEmail} 
          className="space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
          
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="name" 
              className="block text-sm lg:text-base font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 text-sm sm:text-base placeholder-gray-400 outline-none transition duration-200"
            />
          </div>
          
          <div className="space-y-1.5">
            <label htmlFor="email" 
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400 outline-none transition duration-200"
            />
          </div>
          
          <div className="space-y-1.5">
            <label htmlFor="message" 
              className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400 outline-none transition duration-200 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {status === 'sending' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-center text-sm font-medium">
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center text-sm font-medium">
              {errorMessage || 'Failed to send message. Please try again.'}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
