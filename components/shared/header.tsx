import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#778976] to-[#778976] text-white py-6 px-6">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo Image using Next.js Image component */}
          <Image 
            src="/images/LOGO_PNG_SECOND.png" 
            alt="Green Roof Solutions Logo" 
            width={196} // specify width
            height={196} // specify height
            className="object-contain" 
          />
          {/* Site Name */}
          {/* <span className="text-2xl font-extrabold hover:text-green-300 transition-colors">
            BEZRAH
          </span> */}
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="/" className="text-white hover:text-gray-400 transition-all">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-400 transition-all">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-400 transition-all">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-400 transition-all">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
