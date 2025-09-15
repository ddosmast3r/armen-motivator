'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-eerie_black via-black_olive to-eerie_black overflow-hidden pt-28 pb-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 lg:items-center">
            {/* Photo First on Mobile */}
            <div className="flex justify-center order-1 lg:order-2 mb-3 lg:mb-8">
              <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-96 md:h-[32rem] rounded-2xl border-2 border-flame/30 shadow-2xl overflow-hidden">
                <img 
                  src="/image/armen.jpeg"
                  alt="Армен Степаньянц - IFBB PRO тренер"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-floral_white mb-3 sm:mb-6">
                <span className="block mb-2">Армен</span>
                <span className="gradient-text">Степаньянц</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium text-timberwolf mb-6 sm:mb-8">
                Персональный тренер и преподаватель
              </p>
              
              <div className="bg-black_olive/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 border border-flame/20">
                <p className="text-base sm:text-lg text-floral_white mb-4 font-medium text-center lg:text-left">
                  Профессиональный подход к достижению ваших фитнес-целей
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-floral_white leading-tight">Индивидуальные программы</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-floral_white leading-tight">Подбор питания</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-floral_white leading-tight">Правильная техника</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-floral_white leading-tight">Преподаватель НУФ</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-floral_white leading-tight">Мотивация и поддержка</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-eerie_black/60 rounded-xl p-3">
                    <div className="w-3 h-3 bg-flame rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-floral_white leading-tight">Работа с травмами</span>
                  </div>
                </div>
              </div>
              
              <div className="max-w-sm mx-auto lg:mx-0">
                <a
                  href="https://wa.me/79614994999?text=Здравствуйте! Хочу записаться на тренировку в Alex Fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-flame hover:bg-flame-600 text-floral_white px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  <span>Записаться на тренировку</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-flame/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-flame/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-floral_white/5 rounded-full blur-md animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;