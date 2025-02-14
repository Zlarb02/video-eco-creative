import Navbar from "@/components/Navbar";
import { ArrowRight, Camera, Film, ImageIcon, Settings } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-natural-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <span className="inline-block px-4 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                Vidéaste Freelance
              </span>
              <h1 className="font-gilda text-4xl md:text-5xl lg:text-6xl text-natural-900 leading-tight">
                Capturons ensemble vos moments <span className="text-coral-500">précieux</span>
              </h1>
              <p className="text-natural-600 text-lg md:text-xl leading-relaxed font-inter">
                Je suis Anaïs, vidéaste passionnée basée dans les Hauts-de-France. Spécialisée dans la création de contenus vidéo authentiques et éco-responsables.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-coral-500 text-white rounded-md hover:bg-coral-600 transition-colors font-medium"
                >
                  Discutons de votre projet <ArrowRight className="ml-2" size={20} />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center px-6 py-3 border border-natural-300 text-natural-700 rounded-md hover:bg-natural-100 transition-colors font-medium"
                >
                  Voir mes réalisations
                </a>
              </div>
            </div>
            <div className="relative animate-fade-down">
              <svg className="w-full h-auto" viewBox="0 0 1281 1280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1281" height="1280" rx="40" fill="#F8F9F5"/>
                <path
                  d="M640.5 800C751.269 800 841 710.269 841 599.5C841 488.731 751.269 399 640.5 399C529.731 399 440 488.731 440 599.5C440 710.269 529.731 800 640.5 800Z"
                  fill="#D4D8CC"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-natural-400 text-sm">Photo d'Anaïs à venir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Camera size={32} />, title: "Cadrage", description: "Captation professionnelle avec mon Panasonic GH5" },
              { icon: <Film size={32} />, title: "Montage", description: "Montage créatif et dynamique de vos contenus" },
              { icon: <Settings size={32} />, title: "Réalisation", description: "Direction artistique et technique complète" },
              { icon: <ImageIcon size={32} />, title: "Photographie", description: "Photos événementielles et portraits" },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-coral-50 rounded-lg flex items-center justify-center text-coral-500 mb-4 group-hover:bg-coral-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-natural-900 mb-2">{service.title}</h3>
                <p className="text-natural-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos Preview */}
      <section className="py-20 bg-natural-100/50 px-4 sm:px-6 lg:px-8" id="about">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium mb-8">
            À propos
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-natural-900 mb-6">
            La vidéo au service de vos émotions
          </h2>
          <p className="text-natural-600 text-lg leading-relaxed mb-8">
            Passionnée par l'image depuis le lycée, j'ai développé mon expertise à travers de nombreux projets, des festivals
            comme Rock in Bourlon aux événements institutionnels. Mon approche allie créativité et éco-responsabilité pour
            donner vie à vos projets.
          </p>
          <a
            href="#portfolio"
            className="inline-flex items-center px-6 py-3 bg-natural-800 text-white rounded-md hover:bg-natural-900 transition-colors font-medium"
          >
            Découvrir mon travail <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-coral-50 text-coral-700 rounded-full text-sm font-medium mb-4">
                Contact
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-natural-900 mb-4">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-natural-600 text-lg">
                Discutons ensemble de vos besoins et créons quelque chose d'unique.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-natural-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-natural-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-natural-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-natural-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-natural-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-natural-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-coral-500 text-white rounded-md hover:bg-coral-600 transition-colors font-medium"
                >
                  Envoyer le message <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
