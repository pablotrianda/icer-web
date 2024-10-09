import React from 'react'
import { Link } from 'react-router-dom'
import { Church, Facebook, Youtube } from 'lucide-react'

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Church size={24} />
          <span className="text-xl font-bold">ICER</span>
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Inicio</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">Sobre Nosotros</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contacto</Link></li>
          </ul>
          <div className="flex space-x-2">
            <a href="https://es-es.facebook.com/icer.rionegrocipolletti.1/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com/@ICERCipolletti" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
