'use client';

import { useEffect, useState } from 'react';

const Services = () => {
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '🏋️‍♂️',
      title: 'Персональные тренировки',
      description: 'Индивидуальные занятия с персональным тренером, разработанные специально под ваши цели и возможности.',
      features: ['Индивидуальная программа', 'Постоянный контроль техники', 'Гибкий график'],
      price: 'от 2000₽',
      duration: '60 минут'
    },
    {
      icon: '👥',
      title: 'Групповое обучение',
      description: 'Обучающие семинары и мастер-классы для начинающих тренеров и фитнес-энтузиастов.',
      features: ['До 12 человек в группе', 'Теория и практика', 'Сертификат участия'],
      price: 'от 800₽',
      duration: '60 минут'
    },
    {
      icon: '📱',
      title: 'Онлайн консультации',
      description: 'Удаленные консультации по тренировкам и питанию через видеосвязь в удобное время.',
      features: ['Анализ техники по видео', 'Составление программ', 'Консультации по питанию'],
      price: 'от 1000₽',
      duration: '45 минут'
    },
    {
      icon: '🥗',
      title: 'План питания',
      description: 'Индивидуальные рекомендации по питанию для достижения ваших фитнес-целей.',
      features: ['Анализ текущего рациона', 'Индивидуальный план', 'Постоянная корректировка'],
      price: 'от 1500₽',
      duration: 'месяц'
    },
    {
      icon: '🏃‍♀️',
      title: 'Реабилитационные программы',
      description: 'Специальные программы для восстановления после травм и улучшения общего состояния здоровья.',
      features: ['Работа с травмами', 'Лечебная физкультура', 'Постепенное восстановление'],
      price: 'от 2500₽',
      duration: '60 минут'
    },
    {
      icon: '🎯',
      title: 'Программа трансформации',
      description: 'Комплексная 3-месячная программа для кардинального изменения фигуры и образа жизни.',
      features: ['Полное сопровождение', 'Питание + тренировки', 'Психологическая поддержка'],
      price: 'от 25000₽',
      duration: '3 месяца'
    }
  ];

  return (
    <section id="services" className="py-12 bg-black_olive scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-floral_white mb-6">
              Услуги
            </h2>
            <div className="w-24 h-1 bg-flame mx-auto mb-8"></div>
            <p className="text-xl text-timberwolf max-w-3xl mx-auto">
              Выберите подходящий формат тренировок и начните свой путь к здоровому образу жизни уже сегодня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-eerie_black border border-black_olive-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
              >
                <div className="text-center p-6 pb-4 flex-grow">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-floral_white mb-3 leading-tight break-words">
                    {service.title}
                  </h3>
                  <p className="text-timberwolf text-sm leading-relaxed break-words">
                    {service.description}
                  </p>
                </div>

                <div className="px-6 pb-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-flame rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-timberwolf-700 text-sm leading-relaxed break-words flex-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-black_olive-400 mt-auto">
                  <a
                    href={`https://wa.me/79614994999?text=Здравствуйте! Хочу записаться на тренировку: ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-flame hover:bg-flame-600 text-floral_white py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                  >
                    <span>Записаться</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-8 bg-gradient-to-r from-flame to-flame-700 rounded-2xl p-6 text-center text-floral_white">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
              Готовы начать свою трансформацию?
            </h3>
            <p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-8 text-flame-100">
              Запишитесь на бесплатную консультацию и получите персональный план тренировок
            </p>
            <a 
              href="https://wa.me/79614994999?text=Здравствуйте! Хочу получить бесплатную консультацию по тренировкам"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-floral_white text-flame hover:bg-floral_white-600 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Бесплатная консультация</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;