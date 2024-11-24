'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegLightbulb, FaWrench, FaPaintBrush } from 'react-icons/fa'
import { useEffect } from 'react'
import gsap from 'gsap'

const HomePage = () => {
  // GSAP Animations for all sections
  useEffect(() => {
    // Hero Section Fade-In & Parallax Effect
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    )
    gsap.fromTo(
      '.hero-image',
      { scale: 1.1 },
      { scale: 1, duration: 2, ease: 'power2.out' }
    )

    // Fade-in & Scale-up for Section Title
    gsap.fromTo(
      '.section-title',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 1 }
    )

    // Background Gradient Animation (Dynamic)
    gsap.to('.background-gradient', {
      background: 'linear-gradient(90deg, #384131, #2a3c2f, #4a6a52)',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'linear',
    })
  }, [])

  return (
    <main className="bg-[#384131] text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-56 flex items-center justify-center text-center">
        <Image
          src="/images/COVER.jpg"
          alt="Cover Image"
          // fill
          width={1300}
          height={100}
          className="object-cover hero-image opacity-80 absolute"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38413190] to-[#384131] background-gradient"></div>
        <div className="relative z-10 hero-content max-w-3xl px-4 md:px-8">
          {/* <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl tracking-tight leading-tight"> 
            Sustainable Roofing Solutions
           </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 drop-shadow-lg">
             Innovation meets sustainability. Transform your roof into a greener future. 
          </p> */}
          <Link
            href="/services"
            className="mt-8 inline-block bg-white bg-opacity-20 text-white py-2 mt-80 px-8 rounded-full text-lg md:text-xl hover:bg-opacity-30 transition-all cta-button shadow-md backdrop-blur-md transform hover:scale-105"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Preview (Without Animation) */}
      <section className="py-20 px-4 md:px-12">
        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-300">
            Innovative and sustainable roofing solutions tailored to your needs.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[ 
              {
                Icon: FaRegLightbulb,
                title: 'Green Roof Installation',
                text: 'Professional green roof installations to reduce energy consumption and improve air quality.',
              },
              {
                Icon: FaWrench,
                title: 'Roof Maintenance',
                text: 'Maintain your green roof with regular inspections and expert care.',
              },
              {
                Icon: FaPaintBrush,
                title: 'Consultation & Design',
                text: 'Tailored design and consultation services for the ideal green roof.',
              },
            ].map(({ Icon, title, text }) => (
              <div
  key={title}
  className=" bg-gradient-to-bl to-[#ffffff27] via-[#ffffff01] from-[#ffffff33] p-8 shadow-lg rounded-lg transition-all hover:shadow-2xl hover:scale-105 backdrop-blur-lg transform hover:rotate-2"
>
  <Icon className="text-[#a0b59f] text-4xl mb-4 transition-transform transform hover:scale-125 hover:rotate-12" />
  <h3 className="text-2xl font-semibold">{title}</h3>
  <p className="mt-4 text-gray-300">{text}</p>
</div>

            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#384131] via-[#2a3c2f] to-[#4a6a52] text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold">
      Ready to Take the Next Step?
    </h2>
    <p className="mt-4 text-lg md:text-xl text-gray-300">
      Contact us today and start your journey toward a greener, more sustainable future for your roof.
    </p>
    <Link
      href="/contact"
      className="mt-8 inline-block bg-white bg-opacity-20 text-white py-3 px-8 rounded-full text-lg md:text-xl hover:bg-opacity-30 transition-all shadow-md backdrop-blur-md transform hover:scale-105 cta-button"
    >
      Get in Touch
    </Link>
  </div>
</section>

    </main>
  )
}

export default HomePage
