'use client';

import { useState, useEffect } from 'react';

const Course = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('course');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="course" className="py-16 bg-gradient-to-b from-eerie_black to-black_olive">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-floral_white mb-6">
              Курс <span className="gradient-text">«Персональный тренер»</span>
            </h2>
            <p className="text-lg md:text-xl text-timberwolf-400 max-w-3xl mx-auto">
              Профессиональная подготовка персональных тренеров с практическими навыками и научным подходом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Course Info */}
            <div className="space-y-8">
              
              {/* Course Details */}
              <div className="bg-black_olive/40 backdrop-blur-sm rounded-2xl p-6 border border-flame/20">
                <h3 className="text-2xl font-heading font-bold text-floral_white mb-4">
                  О курсе
                </h3>
                <p className="text-timberwolf-300 mb-6 leading-relaxed">
                  Комплексная программа обучения для будущих персональных тренеров. 
                  Получите все необходимые знания и навыки для успешной работы в фитнес-индустрии.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-floral_white">Анатомия и физиология</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-floral_white">Методика тренировок</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-floral_white">Спортивное питание</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-floral_white">Психология клиента</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-flame/10 backdrop-blur-sm rounded-2xl p-6 border border-flame/30">
                <h3 className="text-xl font-heading font-bold text-floral_white mb-4 flex items-center">
                  <span className="text-2xl mr-2">📞</span>
                  Записаться на курс
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-flame font-medium">Телефон:</span>
                    <a href="tel:+79614994999" className="text-floral_white hover:text-flame transition-colors">
                      +7 (961) 499-49-99
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-flame font-medium">WhatsApp:</span>
                    <a 
                      href="https://wa.me/79614994999?text=Здравствуйте! Хочу записаться на курс 'Персональный тренер'"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-floral_white hover:text-flame transition-colors"
                    >
                      Написать в WhatsApp
                    </a>
                  </div>
                  
                  <a
                    href="https://wa.me/79614994999?text=Здравствуйте! Хочу записаться на курс 'Персональный тренер'"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-flame hover:bg-flame-600 text-floral_white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center mt-4"
                  >
                    <span>Записаться на курс</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-96 md:h-[500px] rounded-2xl border-2 border-flame/30 shadow-2xl overflow-hidden">
                <img 
                  src="/image/armen-teach.jpeg"
                  alt="Армен Степаньянц - преподаватель курса персональных тренеров"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;