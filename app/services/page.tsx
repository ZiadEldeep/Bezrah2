// app/services/page.tsx
import { FaRegLightbulb, FaWrench, FaPaintBrush } from 'react-icons/fa'

const Services = () => {
  return (
    <main className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-800">Our Services</h1>
        <p className="mt-4 text-xl text-gray-600">
          We provide innovative green roofing solutions to improve the environment and aesthetics of your property.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1: Green Roof Installation */}
          <div className="bg-white p-8 shadow-lg rounded-lg transform transition-all hover:shadow-xl hover:scale-105">
            <div className="text-green-600 text-4xl mb-4">
              <FaRegLightbulb />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Green Roof Installation</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our expert team installs eco-friendly, low-maintenance green roofs that are both functional and beautiful. These roofs help reduce energy consumption and promote environmental sustainability.
            </p>
          </div>

          {/* Service 2: Roof Maintenance */}
          <div className="bg-white p-8 shadow-lg rounded-lg transform transition-all hover:shadow-xl hover:scale-105">
            <div className="text-green-600 text-4xl mb-4">
              <FaWrench />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Roof Maintenance</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our team offers regular maintenance services to ensure the longevity of your green roof. We perform inspections, cleaning, and repairs to keep your roof in top condition year-round.
            </p>
          </div>

          {/* Service 3: Consultation & Design */}
          <div className="bg-white p-8 shadow-lg rounded-lg transform transition-all hover:shadow-xl hover:scale-105">
            <div className="text-green-600 text-4xl mb-4">
              <FaPaintBrush />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Consultation & Design</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our design team works with you to create a custom green roofing solution tailored to your needs. From initial consultation to full implementation, we guide you every step of the way.
            </p>
          </div>

          {/* Service 4: Stormwater Management */}
          <div className="bg-white p-8 shadow-lg rounded-lg transform transition-all hover:shadow-xl hover:scale-105">
            <div className="text-green-600 text-4xl mb-4">
              <FaRegLightbulb />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Stormwater Management</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our green roofing solutions help manage stormwater runoff by absorbing rainwater, which reduces flooding and enhances the overall resilience of your property to climate change.
            </p>
          </div>

          {/* Service 5: Energy Efficiency Solutions */}
          <div className="bg-white p-8 shadow-lg rounded-lg transform transition-all hover:shadow-xl hover:scale-105">
            <div className="text-green-600 text-4xl mb-4">
              <FaWrench />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Energy Efficiency Solutions</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our green roofs reduce the heat island effect, making your property more energy efficient. With our energy solutions, you can lower cooling costs and increase the sustainability of your building.
            </p>
          </div>

          {/* Service 6: Biodiversity Enhancement */}
          <div className="bg-white p-8 shadow-lg rounded-lg transform transition-all hover:shadow-xl hover:scale-105">
            <div className="text-green-600 text-4xl mb-4">
              <FaPaintBrush />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Biodiversity Enhancement</h3>
            <p className="mt-4 text-lg text-gray-600">
              We design green roofs that support local flora and fauna. By promoting biodiversity, our roofs create habitats for pollinators and birds, contributing to a healthier urban ecosystem.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 rounded-lg">
          <h3 className="text-3xl font-extrabold">Ready to Transform Your Roof?</h3>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Contact us today to explore how we can help you create a sustainable, eco-friendly green roof that fits your needs. Whether it's installation, maintenance, or design, we're here to assist.
          </p>
          <a href="/contact" className="mt-8 inline-block bg-white text-green-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-100">
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  )
}

export default Services
