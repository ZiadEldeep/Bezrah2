// app/services/page.tsx
const Services = () => {
    return (
      <main className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-xl">
            We provide innovative green roofing solutions to improve the environment and aesthetics of your property.
          </p>
  
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold">Green Roof Installation</h3>
              <p className="mt-4 text-lg">Our expert team installs eco-friendly, low-maintenance green roofs that are both functional and beautiful.</p>
            </div>
            {/* Add more services */}
          </div>
        </div>
      </main>
    )
  }
  
  export default Services
  