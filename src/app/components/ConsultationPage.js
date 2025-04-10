/* eslint-disable react/no-unescaped-entities */
// pages/consultation.js
import { useState } from 'react';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your consultation request has been submitted.');
    // Here you can integrate email or backend API to handle form submission.
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Book Your Free Consultation
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Let’s discuss your project. Fill out the form below, and we'll get back to you as soon as possible!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-400 focus:border-lime-400"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-400 focus:border-lime-400"
              placeholder="youremail@example.com"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-400 focus:border-lime-400"
              placeholder="Tell us about your project or questions"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-lime-400 text-white py-3 rounded-md text-lg font-semibold hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-opacity-50"
            >
              Book Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPage;
