import React, { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-4xl font-bold text-center mb-6">Contact</h2>

      {!submitted ? (
        <form
          action="https://formspree.io/f/xanpjzkl"
          method="POST"
          className="mt-6 space-y-4"
          onSubmit={() => setSubmitted(true)}
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full mt-1 p-2 border rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold text-center mt-6">
          Thank you! Your message has been sent.
        </p>
      )}
      
      <div className="flex gap-4 mt-6 justify-center">
        <a
          href="https://www.linkedin.com/in/folahanmi-ilori-b4276b236/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-700"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  )
}

