// components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-800 text-white py-6">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo Image using Next.js Image component */}
          <Image 
            src="/images/logo.jpeg" 
            alt="Green Roof Solutions Logo" 
            width={40} // specify width
            height={40} // specify height
            className="object-contain" 
          />
          {/* Site Name */}
          <span className="text-4xl font-extrabold hover:text-green-300 transition-colors">
            Green Roof Solutions
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="/about" className="text-white hover:text-green-300 transition-all">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-green-300 transition-all">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-green-300 transition-all">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
