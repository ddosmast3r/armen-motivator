'use client';

import { useState, useEffect } from 'react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const students = [
    {
      id: 1,
      image: '/image/coach/photo_2025-09-12_14-55-05.jpg',
      alt: 'Ученик курса персональных тренеров'
    },
    {
      id: 2,
      image: '/image/coach/photo_2025-09-12_14-55-06.jpg',
      alt: 'Выпускник курса персональных тренеров'
    },
    {
      id: 3,
      image: '/image/coach/photo_2025-09-12_14-55-06 (2).jpg',
      alt: 'Студент курса фитнес-тренеров'
    },
    {
      id: 4,
      image: '/image/coach/photo_2025-09-12_14-55-06 (3).jpg',
      alt: 'Практическое занятие курса'
    },
    {
      id: 5,
      image: '/image/coach/photo_2025-09-12_14-55-06 (4).jpg',
      alt: 'Обучение персональных тренеров'
    },
    {
      id: 6,
      image: '/image/coach/photo_2025-09-12_14-55-07.jpg',
      alt: 'Выпускники курса тренеров'
    },
    {
      id: 7,
      image: '/image/coach/photo_2025-09-12_14-55-07 (2).jpg',
      alt: 'Группа студентов курса'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('gallery');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-black_olive to-eerie_black">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-floral_white mb-6">
              Галерея <span className="gradient-text">учеников</span>
            </h2>
            <p className="text-lg md:text-xl text-timberwolf-400 max-w-3xl mx-auto">
              Наши выпускники - успешные персональные тренеры, которые применяют полученные знания на практике
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {students.map((student, index) => (
              <div 
                key={student.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(student.image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={student.image}
                    alt={student.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-flame/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-floral_white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" />
                    </svg>
                    <p className="text-floral_white font-medium">Увеличить</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-black_olive/40 backdrop-blur-sm rounded-2xl p-6 border border-flame/20">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">150+</div>
              <p className="text-timberwolf-400">Выпускников курса</p>
            </div>
            <div className="text-center bg-black_olive/40 backdrop-blur-sm rounded-2xl p-6 border border-flame/20">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5</div>
              <p className="text-timberwolf-400">Лет преподавания</p>
            </div>
            <div className="text-center bg-black_olive/40 backdrop-blur-sm rounded-2xl p-6 border border-flame/20">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
              <p className="text-timberwolf-400">Успешное трудоустройство</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Увеличенное фото"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-floral_white bg-flame hover:bg-flame-600 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;