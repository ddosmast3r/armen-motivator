"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black_olive/95 backdrop-blur-md shadow-lg"
          : "bg-eerie_black/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-2xl font-bold gradient-text">
              Армен Степаньянц
            </div>
            <div className="text-sm font-medium text-timberwolf-400">
              Персональный тренер
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-floral_white hover:bg-flame hover:text-floral_white shadow-sm"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-floral_white hover:bg-flame hover:text-floral_white shadow-sm"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-floral_white hover:bg-flame hover:text-floral_white shadow-sm"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-floral_white hover:bg-flame hover:text-floral_white shadow-sm"
            >
              Контакты
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-floral_white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-black_olive-400">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left py-3 px-4 font-semibold text-floral_white hover:bg-flame hover:text-floral_white transition-all duration-300 rounded-lg"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-3 px-4 font-semibold text-floral_white hover:bg-flame hover:text-floral_white transition-all duration-300 rounded-lg"
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-3 px-4 font-semibold text-floral_white hover:bg-flame hover:text-floral_white transition-all duration-300 rounded-lg"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-3 px-4 font-semibold text-floral_white hover:bg-flame hover:text-floral_white transition-all duration-300 rounded-lg"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
