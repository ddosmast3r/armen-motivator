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

  const sendToWhatsApp = (data: typeof formData) => {
    const phone = "79614994999";
    const message = `🏋️ Новая заявка с сайта:
👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
🎯 Услуга: ${data.service || 'Не указана'}
💬 Сообщение: ${data.message || 'Не указано'}`;
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем обязательные поля
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }

    // Отправляем в WhatsApp
    sendToWhatsApp(formData);
    
    // Очищаем форму
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
    <section id="contact" className="py-12 bg-eerie_black scroll-mt-24">
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
            {/* Contact Form */}
            <div className="bg-black_olive rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-floral_white mb-6 text-center">
                Записаться на тренировку
              </h3>
              <p className="text-timberwolf-400 text-center mb-8">
                Оставьте заявку и я свяжусь с вами в течение часа
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-floral_white font-medium mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-eerie_black border border-black_olive-400 rounded-lg text-floral_white focus:border-flame focus:outline-none focus:ring-2 focus:ring-flame/20"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-floral_white font-medium mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-eerie_black border border-black_olive-400 rounded-lg text-floral_white focus:border-flame focus:outline-none focus:ring-2 focus:ring-flame/20"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-floral_white font-medium mb-2">
                    Услуга
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-eerie_black border border-black_olive-400 rounded-lg text-floral_white focus:border-flame focus:outline-none focus:ring-2 focus:ring-flame/20"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="personal-training">Персональная тренировка</option>
                    <option value="course">Курс "Персональный тренер"</option>
                    <option value="consultation">Консультация по питанию</option>
                    <option value="rehabilitation">Реабилитация после травм</option>
                  </select>
                </div>

                <div>
                  <label className="block text-floral_white font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-eerie_black border border-black_olive-400 rounded-lg text-floral_white focus:border-flame focus:outline-none focus:ring-2 focus:ring-flame/20 resize-none"
                    placeholder="Расскажите о ваших целях и пожеланиях..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-flame hover:bg-flame-600 text-floral_white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Отправить заявку
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-black_olive-400">
                <p className="text-timberwolf-400 text-sm text-center">
                  Или свяжитесь со мной напрямую:
                </p>
                <div className="flex justify-center space-x-4 mt-3">
                  <a
                    href="https://wa.me/79614994999?text=Здравствуйте! Хочу записаться на тренировку"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                  >
                    <span>📱</span>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+79614994999"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                  >
                    <span>📞</span>
                    <span>Позвонить</span>
                  </a>
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
