
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-lg sm:text-xl font-playfair text-natural-900 hover:text-coral-500 transition-colors">
              Anaïs Pogoda
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#about" className="text-natural-700 hover:text-coral-500 px-3 py-2 text-sm font-medium transition-colors">
                À propos
              </a>
              <a href="#services" className="text-natural-700 hover:text-coral-500 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-natural-700 hover:text-coral-500 px-3 py-2 text-sm font-medium transition-colors">
                Portfolio
              </a>
              <a
                href="#contact"
                className="bg-coral-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-coral-600 transition-colors"
              >
                Me contacter
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-natural-700 hover:text-coral-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#about"
            className="text-natural-700 hover:text-coral-500 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </a>
          <a
            href="#services"
            className="text-natural-700 hover:text-coral-500 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-natural-700 hover:text-coral-500 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="bg-coral-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-coral-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Me contacter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
