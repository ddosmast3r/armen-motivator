"use client";

import { useEffect, useState } from "react";

const About = () => {
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

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { number: "10+", text: "лет опыта" },
    { number: "200+", text: "довольных клиентов" },
    { number: "100%", text: "индивидуальный подход" },
    { number: "24/7", text: "поддержка" },
  ];

  const skills = [
    "Силовые тренировки",
    "Кардиотренировки",
    "Функциональный тренинг",
    "Реабилитация после травм",
    "Консультации по питанию",
    "Мотивация и психология",
  ];

  return (
    <section
      id="about"
      className="py-12 bg-eerie_black scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-floral_white mb-6">
              Обо мне
            </h2>
            <div className="w-24 h-1 bg-flame mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-flame to-flame-700 rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden border-4 border-floral_white/20">
                  <img
                    src="/image/armen-avatar.png"
                    alt="Армен Степаньянц - педагог института фитнеса"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-floral_white mb-2">
                  Армен Степаньянц
                </h3>
                <div className="space-y-1">
                  <p className="text-flame-100 font-semibold text-sm sm:text-base">
                    IFBB PRO тренер
                  </p>
                  <p className="text-flame-200 text-xs sm:text-sm leading-tight">
                    Выигравший PRO Карту на турнире NPC Worldwide Russia
                  </p>
                  <a
                    href="https://www.instagram.com/nufrussia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flame-200 hover:text-flame-300 text-xs sm:text-sm transition-colors underline block"
                  >
                    Педагог института фитнеса НУФ
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-floral_white mb-3 sm:mb-4">
                  Профессиональный подход к фитнесу
                </h3>
                <p className="text-timberwolf text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
                  С почти 10-летним опытом в сфере фитнеса помогаю людям достигать
                  их целей через индивидуально разработанные программы тренировок
                  и комплексный подход к здоровью.
                </p>
                <p className="text-timberwolf text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
                  Моя философия основана на том, что каждый человек уникален.
                  Поэтому каждая программа тренировок создается с учетом индивидуальных
                  особенностей, целей и возможностей клиента.
                </p>
                <div className="bg-flame/10 border border-flame/30 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl sm:text-2xl">🏋️</div>
                    <div>
                      <h4 className="font-semibold text-floral_white mb-1 text-sm sm:text-base">
                        Место проведения тренировок
                      </h4>
                      <p className="text-timberwolf text-xs sm:text-sm">
                        Провожу тренировки в{" "}
                        <span className="font-semibold text-flame">
                          Alex Fitness Пятигорск
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-floral_white mb-3 sm:mb-4">
                  Специализации:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 bg-black_olive-600 p-2.5 sm:p-3 rounded-lg shadow-sm border border-black_olive-400 min-h-0 overflow-hidden"
                    >
                      <div className="w-2 h-2 bg-flame rounded-full flex-shrink-0 mt-1.5"></div>
                      <span className="text-timberwolf-700 text-sm sm:text-base leading-tight break-words flex-1">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-floral_white mb-4">
                Сертификаты и <span className="gradient-text">квалификация</span>
              </h3>
              <p className="text-lg text-timberwolf-400 max-w-2xl mx-auto">
                Подтверждённая профессиональная квалификация и постоянное развитие в области фитнеса
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* Existing Certificate */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-black_olive/40 backdrop-blur-sm border border-flame/20">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="/image/doc/armen.jpg"
                    alt="Сертификат Армена Степаньянца"
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

                <div className="p-4">
                  <h4 className="text-lg font-semibold text-floral_white mb-2">
                    Сертификат специалиста
                  </h4>
                  <p className="text-sm text-timberwolf-400">
                    Профессиональная квалификация в области фитнеса
                  </p>
                </div>
              </div>

              {/* Placeholder Certificate 1 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-black_olive/20 backdrop-blur-sm border-2 border-dashed border-flame/30">
                <div className="aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-black_olive/40 to-eerie_black/60">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-flame/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-flame" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-timberwolf-400 font-medium text-sm">
                      В процессе добавления
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-floral_white/60 mb-2">
                    Дополнительная квалификация
                  </h4>
                  <p className="text-sm text-timberwolf-400/60">
                    Скоро будет добавлен новый сертификат
                  </p>
                </div>
              </div>

              {/* Placeholder Certificate 2 */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-black_olive/20 backdrop-blur-sm border-2 border-dashed border-flame/30">
                <div className="aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-black_olive/40 to-eerie_black/60">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-flame/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-flame" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-timberwolf-400 font-medium text-sm">
                      В процессе добавления
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-floral_white/60 mb-2">
                    Специализация
                  </h4>
                  <p className="text-sm text-timberwolf-400/60">
                    Скоро будет добавлен новый сертификат
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-8 bg-black_olive rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-flame mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-timberwolf font-medium">
                    {achievement.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
