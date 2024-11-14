'use client'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm()
    setFormErrors(errors)

    if (Object.values(errors).every(error => !error)) {
      // Handle form submission (e.g., send to server)
      alert('Thank you for your message! We will get back to you as soon as possible.')
    }
  }

  const validateForm = () => {
    const errors: any = {}

    if (!formData.name) errors.name = 'Please provide your name.'
    if (!formData.email) errors.email = 'Please provide your email address.'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Please provide a valid email address.'
    if (!formData.message) errors.message = 'Please share your message with us.'

    return errors
  }

  return (
    <main className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">We'd Love to Hear From You!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for considering Green Roof Solutions. Whether you have a question, feedback, or just want to get in touch, we're here to help!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            />
            {formErrors.name && <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>}
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            />
            {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message or Inquiry"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
            ></textarea>
            {formErrors.message && <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>}
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all">
            Send Message
          </button>
        </form>

        {/* Contact Information Section */}
        <div className="mt-12 text-gray-600">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h3>
          <p className="text-lg mb-8">We are happy to assist you in any way we can. You can reach us through the following methods:</p>

          <div className="space-y-6">
            <div>
              <p>
                <strong className="font-semibold">Email:</strong>{' '}
                <a href="mailto:hr@bezrah.org" className="text-green-600 hover:text-green-700">
                  hr@bezrah.org
                </a>
              </p>
            </div>
            <div>
              <p><strong className="font-semibold">Phone:</strong> +1 (123) 456-7890</p>
            </div>
            <div>
              <p><strong className="font-semibold">Address:</strong> 123 Green Street, Eco City, State, 45678</p>
            </div>
          </div>

          <div className="mt-8 text-gray-500">
            <p>We appreciate you reaching out to us. If you prefer, you can also connect with us on our social media pages for the latest updates.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
