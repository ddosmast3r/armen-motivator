"use client";

import { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Я свяжусь с вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Телефон",
      value: "+7 (961) 499-49-99",
      link: "tel:+79614994999",
    },
    {
      icon: "✉️",
      title: "Email",
      value: "chance555@mail.ru",
      link: "mailto:chance555@mail.ru",
    },
    {
      icon: "📍",
      title: "Адрес",
      value: `Фитнес-клуб Alex Fitness — Пятигорск, Ессентукская 31А`,
      link: "#",
    },
    {
      icon: "📱",
      title: "Instagram",
      value: "@armenmotivator",
      link: "https://www.instagram.com/armenmotivator/",
    },
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", time: "09:00 - 20:00" },
    { day: "Суббота - Воскресенье", time: "10:00 - 18:00" },
  ];

  return (
    <section id="contact" className="py-12 bg-eerie_black">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-floral_white mb-6">
              Контакты
            </h2>
            <div className="w-24 h-1 bg-flame mx-auto mb-8"></div>
            <p className="text-xl text-timberwolf max-w-3xl mx-auto">
              Свяжитесь со мной любым удобным способом. Я отвечу в течение
              нескольких часов!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Course Banner */}
            <div className="bg-black_olive rounded-xl shadow-xl overflow-hidden">
              {/* Image Section */}
              <div className="h-80 md:h-96 lg:h-[32rem] overflow-hidden">
                <img
                  src="/image/armen-teach.jpeg"
                  alt="Армен Степаньянц - преподаватель курса"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-floral_white mb-2 text-center">
                  Курс "Персональный тренер"
                </h3>
                <p className="text-lg text-flame mb-1 text-center font-semibold">
                  Обучение от IFBB PRO тренера
                </p>
                <p className="text-sm text-timberwolf mb-4 text-center">
                  Педагог института фитнеса НУФ • Официальная сертификация
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                  <div className="bg-eerie_black rounded-lg p-3 text-center flex items-center space-x-3 sm:block sm:space-x-0">
                    <div className="text-xl mb-0 sm:mb-1 flex-shrink-0">🎓</div>
                    <p className="text-sm sm:text-xs text-timberwolf font-medium leading-tight flex-1 sm:flex-none text-left sm:text-center">
                      Сертификация НУФ
                    </p>
                  </div>
                  <div className="bg-eerie_black rounded-lg p-3 text-center flex items-center space-x-3 sm:block sm:space-x-0">
                    <div className="text-xl mb-0 sm:mb-1 flex-shrink-0">👥</div>
                    <p className="text-sm sm:text-xs text-timberwolf font-medium leading-tight flex-1 sm:flex-none text-left sm:text-center">
                      Практические занятия
                    </p>
                  </div>
                  <div className="bg-eerie_black rounded-lg p-3 text-center flex items-center space-x-3 sm:block sm:space-x-0">
                    <div className="text-xl mb-0 sm:mb-1 flex-shrink-0">📋</div>
                    <p className="text-sm sm:text-xs text-timberwolf font-medium leading-tight flex-1 sm:flex-none text-left sm:text-center">
                      Официальный диплом
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://tolyatti.nuf.fitness/courses/pyatigorsk.-fitnes-trener-trenazhernogo-zala.-ochnyj-kurs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-flame hover:bg-flame-600 text-floral_white py-4 px-6 rounded-lg font-bold text-center text-lg transition-all duration-300 hover:shadow-lg"
                  >
                    🎓 Записаться на курс
                  </a>

                  <div className="space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
                    <a
                      href="https://wa.me/79614994999?text=Здравствуйте! Хочу записаться на тренировку в Alex Fitness"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-3 rounded-lg font-semibold text-center text-sm transition-all duration-300 hover:shadow-lg"
                    >
                      📱 Тренировка
                    </a>

                    <a
                      href="tel:+79614994999"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-floral_white py-2.5 px-3 rounded-lg font-semibold text-center text-sm transition-all duration-300 hover:shadow-lg"
                    >
                      📞 Позвонить
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-black_olive rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-floral_white mb-6">
                  Контактная информация
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-floral_white">
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          className="text-flame hover:text-flame-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black_olive rounded-3xl shadow-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-floral_white mb-4 sm:mb-6">
                  Часы работы
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-black_olive-400 last:border-b-0 space-y-1 sm:space-y-0"
                    >
                      <span className="text-timberwolf text-sm sm:text-base">
                        {schedule.day}
                      </span>
                      <span className="font-semibold text-flame text-sm sm:text-base">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-flame to-flame-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-floral_white text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  Бесплатная консультация
                </h3>
                <p className="mb-4 sm:mb-6 text-flame-100 text-sm sm:text-base leading-tight">
                  Запишитесь на бесплатную 30-минутную консультацию, чтобы
                  обсудить ваши цели и составить план тренировок.
                </p>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  ☎️ +7 (961) 499-49-99
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
