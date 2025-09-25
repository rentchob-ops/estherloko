import React from "react";
import { GraduationCap, Briefcase, Heart, Users, Award, Target, Phone, Instagram } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-[#00C2A8]" />,
      title: "Professionnalisme",
      description: "Excellence et rigueur dans chaque mission."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#00C2A8]" />,
      title: "Créativité",
      description: "Innovation et originalité dans mes créations."
    },
    {
      icon: <Users className="w-8 h-8 text-[#00C2A8]" />,
      title: "Relations Humaines",
      description: "Écoute, empathie et communication bienveillante."
    },
    {
      icon: <Target className="w-8 h-8 text-[#00C2A8]" />,
      title: "Rigueur",
      description: "Attention aux détails et respect des engagements."
    }
  ];

  const galleryItems = [
    { title: "Coiffure Créative 1", src: "https://i.ibb.co/fd33pPjS/profile-pic-5.png" },
    { title: "Produit Artisanal ESHA", src: "https://i.ibb.co/hJryRMNh/65b77702-a0d0-4fb5-ac39-374f780c6bd0.jpg" },
    { title: "Événement Professionnel", src: "https://i.ibb.co/YW1T2Qs/event-sample.jpg" },
    { title: "Coiffure Créative 2", src: "https://i.ibb.co/5xQmYkJ/hair-sample.jpg" },
  ];

  return (
    <div className="bg-primary-900 text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#00C2A8]">
          À propos de <span className="text-white">Akpedjè Esther LOKO</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-6">
          Je suis votre partenaire de confiance pour l'excellence dans l'accueil professionnel, la beauté capillaire et les produits artisanaux de qualité. Ensemble, créons des expériences mémorables.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+2290162994910"
            className="px-8 py-4 bg-[#00C2A8] text-primary-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Réservez maintenant</span>
          </a>
          <a
            href="https://www.instagram.com/akpedjeesther"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center space-x-2"
          >
            <Instagram className="w-5 h-5" />
            <span>Suivez-moi sur Instagram</span>
          </a>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00C2A8] mb-12">Mon Parcours Professionnel</h2>
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          {/* Formation */}
          <div className="bg-blue-900 bg-opacity-20 p-8 rounded-xl shadow-lg">
            <GraduationCap className="w-10 h-10 text-[#00C2A8] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Formation Académique</h3>
            <p className="text-gray-200">
              Diplômée en <strong>Assistanat et Secrétariat de Direction</strong> de la Haute École de Commerce et de Management (HECM) du Bénin. Cette formation m'a dotée des compétences essentielles pour exceller dans le domaine professionnel.
            </p>
          </div>
          {/* Expérience */}
          <div className="bg-blue-900 bg-opacity-20 p-8 rounded-xl shadow-lg">
            <Briefcase className="w-10 h-10 text-[#00C2A8] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Expérience Professionnelle</h3>
            <p className="text-gray-200">
              Hôtesse d'accueil chez <em>La Roche Bénin</em>, où j'ai développé une expertise dans l'accueil client, la gestion événementielle et les relations publiques.
            </p>
          </div>
          {/* Entrepreneuriat */}
          <div className="bg-blue-900 bg-opacity-20 p-8 rounded-xl shadow-lg">
            <Heart className="w-10 h-10 text-[#00C2A8] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Passion & Entrepreneuriat</h3>
            <p className="text-gray-200">
              Création de la marque <strong>ESHA 🍯</strong> spécialisée dans la production et la commercialisation de miels artisanaux de qualité premium, alliant tradition et innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00C2A8] mb-12">Mes Valeurs Fondamentales</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {values.map((value, index) => (
            <div key={index} className="bg-[#0A3764] bg-opacity-40 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-200">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie / Réalisations */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00C2A8] mb-12">Galerie & Réalisations</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Découvrez mes créations et prestations. Chaque réalisation reflète mon professionnalisme et ma créativité.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
              <img src={item.src} alt={item.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                <span className="text-white text-lg font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#00C2A8] to-cyan-500 text-primary-900">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt(e) à réserver ou à me contacter ?</h2>
        <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
          Je suis là pour répondre à vos besoins en accueil professionnel, beauté capillaire ou produits artisanaux de qualité.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="tel:+2290162994910"
            className="px-8 py-4 bg-white text-primary-900 font-bold rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span>Réservez maintenant</span>
          </a>
          <a
            href="https://www.instagram.com/akpedjeesther"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
          >
            <Instagram className="w-5 h-5" />
            <span>Suivez-moi sur Instagram</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
