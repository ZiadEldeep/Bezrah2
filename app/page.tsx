// app/page.tsx
'use client'
import Link from 'next/link'
import { FaRegLightbulb, FaWrench, FaPaintBrush } from 'react-icons/fa'
import { useEffect } from 'react'
import gsap from 'gsap'
// import Header from './components/Header'
// import Footer from './components/Footer'

const HomePage = () => {
  // Animations with GSAP
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      '.hero-content', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    )
    
    // Service cards animation
    gsap.fromTo(
      '.service-card', 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: 'power4.out' }
    )

    // Call-to-action animation
    gsap.fromTo(
      '.cta-button', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: 'power4.out' }
    )
  }, [])

  return (
    <>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/logo.jpeg)' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto text-center text-white relative z-10 pt-40 hero-content">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">Transform Your Roof, Transform Your Future</h1>
            <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto">Eco-friendly roofing solutions that enhance sustainability and save energy costs.</p>
            <div className="mt-6 inline-block bg-green-600 text-white py-3 px-8 rounded-full text-lg hover:bg-green-500 transition-all cta-button">
              <Link href="/services">Explore Our Services</Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800">Our Expertise</h2>
            <p className="mt-4 text-lg text-gray-600">Offering innovative and sustainable roofing solutions to meet your needs.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-white p-8 shadow-lg rounded-lg transition-all hover:shadow-xl hover:scale-105 service-card">
                <div className="text-green-600 text-4xl mb-4">
                  <FaRegLightbulb />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Green Roof Installation</h3>
                <p className="mt-4 text-lg text-gray-600">We provide professional green roof installations that reduce energy consumption and improve air quality.</p>
              </div>
              <div className="bg-white p-8 shadow-lg rounded-lg transition-all hover:shadow-xl hover:scale-105 service-card">
                <div className="text-green-600 text-4xl mb-4">
                  <FaWrench />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Roof Maintenance</h3>
                <p className="mt-4 text-lg text-gray-600">Maintain the health of your green roof with regular inspections and expert care from our team.</p>
              </div>
              <div className="bg-white p-8 shadow-lg rounded-lg transition-all hover:shadow-xl hover:scale-105 service-card">
                <div className="text-green-600 text-4xl mb-4">
                  <FaPaintBrush />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Consultation & Design</h3>
                <p className="mt-4 text-lg text-gray-600">Our team provides tailored design and consultation services to help you create the ideal green roof for your space.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-extrabold">Ready to Take the Next Step?</h2>
            <p className="mt-4 text-lg text-gray-200">Contact us today and start your journey toward a greener, more sustainable future for your roof.</p>
            <div className="mt-6 inline-block bg-white text-green-800 py-3 px-8 rounded-full text-lg hover:bg-green-100 transition-all cta-button">
              <Link href="/contact">Get in Touch</Link>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default HomePage
