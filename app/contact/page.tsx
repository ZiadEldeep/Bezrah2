// app/contact/page.tsx
const Contact = () => {
    return (
      <main className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl">We'd love to hear from you! Fill out the form below or reach us through the contact details.</p>
  
          <form className="mt-8 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
            ></textarea>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </main>
    )
  }
  
  export default Contact
  