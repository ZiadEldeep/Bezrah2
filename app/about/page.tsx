'use client' // Enable client-side rendering for animations

import { useEffect } from 'react'
import gsap from 'gsap'

const About = () => {
  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      '.about-header', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    )
    
    gsap.fromTo(
      '.mission-section', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: 'power4.out' }
    )

    gsap.fromTo(
      '.vision-section', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 1, ease: 'power4.out' }
    )

    gsap.fromTo(
      '.team-section', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 1.5, ease: 'power4.out' }
    )

    gsap.fromTo(
      '.cta-section', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 2, ease: 'power4.out' }
    )
  }, [])

  return (
    <main className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        {/* Hero Section */}
        <div className="about-header">
          <div className="relative bg-cover bg-center h-[60vh] rounded-xl" style={{ backgroundImage: 'url(/images/about.png)' }}>
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
            <div className="relative z-10 flex items-center justify-center text-center text-white p-12">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-extrabold leading-tight tracking-wide sm:text-6xl">
                  About Green Roof Solutions
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
                  We are pioneers in sustainable roofing solutions, committed to transforming urban spaces into green, energy-efficient environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20 mission-section">
          <h2 className="text-4xl font-semibold text-green-600">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto sm:text-xl">
            Our mission is to promote sustainability and reduce carbon footprints through eco-friendly roof designs. We aim to provide green roofing solutions that improve energy efficiency, promote biodiversity, and contribute to a healthier planet. By integrating nature into our cities, we help create vibrant and sustainable urban environments.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-20 vision-section">
          <h2 className="text-4xl font-semibold text-green-600">Our Vision</h2>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto sm:text-xl">
            To lead the green roofing revolution by creating beautiful, functional, and sustainable roofs across the country. We envision a future where every roof is green, benefiting not only building owners but the environment and society as a whole. We aspire to be the leading company in transforming roofs into living spaces that contribute to biodiversity, energy savings, and environmental responsibility.
          </p>
        </div>

        {/* Team Section (No Images) */}
        <div className="mt-20 team-section">
          <h2 className="text-4xl font-semibold text-green-600">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">Our team is made up of experienced professionals who are passionate about creating sustainable and eco-friendly roofing solutions.</p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-lg text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-lg text-gray-600">Lead Architect</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold">Alice Brown</h3>
              <p className="text-lg text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-semibold text-green-600">What Our Clients Say</h2>
          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center">
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <p className="italic text-lg text-gray-600">"Green Roof Solutions transformed our office roof into a beautiful green space, reducing energy costs and improving air quality!"</p>
              <div className="mt-6 flex items-center justify-center">
                <img src="/images/avatar1.jpeg" alt="Client 1" className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-semibold text-gray-700">Michael Johnson</p>
                  <p className="text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <p className="italic text-lg text-gray-600">"The team at Green Roof Solutions was professional, efficient, and truly cared about sustainability. Highly recommend!"</p>
              <div className="mt-6 flex items-center justify-center">
                <img src="/images/avatar2.jpeg" alt="Client 2" className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-semibold text-gray-700">Sarah Lee</p>
                  <p className="text-gray-500">Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-20 cta-section bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 rounded-lg shadow-lg">
          <h3 className="text-3xl font-extrabold">Ready to Take the Next Step?</h3>
          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Contact us today and start your journey toward a greener, more sustainable future for your roof. Whether you are looking for consultation, installation, or maintenance, we are here to help.
          </p>
          <a href="/contact" className="mt-8 inline-block bg-white text-green-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-100">
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  )
}

export default About
