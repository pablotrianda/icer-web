import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contáctenos</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                (123) 456-7890
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                info@localchurch.com
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                Resistencia 131, Cipolletti, Río Negro
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300">Inicio</a></li>
              <li><a href="/about" className="hover:text-blue-300">Sobre nosotros</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Seguinos en las redes sociales:</h3>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"> Facebook </a></li> 
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"> YouTube </a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} ICER. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
