import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const slides = [
    'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1519677584237-752f8853252e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="container mx-auto mt-8">
      <header className="relative">
        <img
          src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Church"
          className="w-full h-96 object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white text-center">
          Bienvenido a nuestra iglesia
        </h1>
      </header>

       <section className="mt-12 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Reuniones semanales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Sunday Services</h3>
            <ul className="list-disc list-inside">
              <li>9:00 AM - Sunday School</li>
              <li>10:30 AM - Morning Worship</li>
              <li>6:00 PM - Evening Service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Weekday Activities</h3>
            <ul className="list-disc list-inside">
              <li>Tuesday 7:00 PM - Bible Study</li>
              <li>Wednesday 6:30 PM - Youth Group</li>
              <li>Thursday 10:00 AM - Women's Prayer Group</li>
              <li>Friday 7:00 PM - Men's Fellowship</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Nuestras actividades</h2>
        <div className="relative">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

     
    </div>
  )
}

export default Home
