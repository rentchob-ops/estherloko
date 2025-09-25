import React from "react";
import { GraduationCap, Briefcase, Heart, Users, Award, Target, Phone } from "lucide-react";

const About = () => {
  const values = [
    { icon: <Award className="w-8 h-8 text-[#00C2A8]" />, title: "Professionnalisme", description: "Excellence et rigueur dans chaque mission." },
    { icon: <Heart className="w-8 h-8 text-[#00C2A8]" />, title: "Créativité", description: "Innovation et originalité dans mes créations." },
    { icon: <Users className="w-8 h-8 text-[#00C2A8]" />, title: "Relations Humaines", description: "Écoute, empathie et communication bienveillante." },
    { icon: <Target className="w-8 h-8 text-[#00C2A8]" />, title: "Rigueur", description: "Attention aux détails et respect des engagements." },
  ];

  const galleryItems = [
    { title: "Coiffure 1", src: "https://i.ibb.co/1RXp8vV/hair1.jpg" },
    { title: "Coiffure 2", src: "https://i.ibb.co/j3vK5Fw/hair2.jpg" },
    { title: "Produit artisanal", src: "https://i.ibb.co/t2yLqZP/product1.jpg" },
    { title: "Événement", src: "https://i.ibb.co/kHxwFvC/event1.jpg" },
    { title: "Coiffure créative", src: "https://i.ibb.co/WkYhx3k/hair3.jpg" },
    { title: "Produit artisanal", src: "https://i.ibb.co/VmQfS0R/product2.jpg" },
  ];

  return (
    <div className="pt-16">

      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00C2A8] mb-6">
          À propos de <span className="text-white">Akpedjè Esther LOKO</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-12">
          Professionnalisme, créativité et passion. Découvrez mon parcours, mes valeurs et mes réalisations.
        </p>
      </section>

      {/* Biographie / Parcours */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00C2A8] mb-8">Mon Parcours Professionnel</h2>
        <div className="max-w-4xl mx-auto space-y-12 text-left">

          {/* Formation */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center md:space-x-6">
            <GraduationCap className="w-12 h-12 text-[#00C2A8] mb-4 md:mb-0" />
            <div>
              <h3 className="text-2xl font-bold text-[#0A3764] mb-2">Formation Académique</h3>
              <p className="text-gray-700 leading-relaxed">
                Diplômée en <strong>Assistanat et Secrétariat de Direction</strong> 
                de la Haute École de Commerce et de Management (HECM) du Bénin. Formation qui m'a dotée de compétences techniques et relationnelles essentielles pour exceller dans le domaine professionnel.
              </p>
            </div>
          </div>

          {/* Expérience */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center md:space-x-6">
            <Briefcase className="w-12 h-12 text-[#00C2A8] mb-4 md:mb-0" />
            <div>
              <h3 className="text-2xl font-bold text-[#0A3764] mb-2">Expérience Professionnelle</h3>
              <p className="text-gray-700 leading-relaxed">
                Hôtesse d'accueil chez <em>La Roche Bénin</em>, spécialisée dans l'accueil client, la gestion événementielle et les relations publiques. Une expérience qui m’a permis de maîtriser l’hospitalité professionnelle et un service client irréprochable.
              </p>
            </div>
          </div>

          {/* Entrepreneuriat */}
          <div className="bg-yellow-50 p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center md:space-x-6">
            <Heart className="w-12 h-12 text-[#00C2A8] mb-4 md:mb-0" />
            <div>
              <h3 className="text-2xl font-bold text-[#0A3764] mb-2">Passion & Entrepreneuriat</h3>
              <p className="text-gray-700 leading-relaxed">
                Créatrice de la marque <strong>ESHA 🍯</strong>, spécialisée dans les miels artisanaux premium. Passionnée par la coiffure créative et l'entrepreneuriat, je combine tradition et innovation pour offrir des produits et services d'exception.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-primary-800 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00C2A8] mb-8">Mes Valeurs Fondamentales</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-12">
          Ces quatre piliers guident chacune de mes actions et définissent mon approche unique dans tous mes domaines d'activité.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white text-[#0A3764] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ma Mission</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Accompagner chaque client avec dévouement et expertise, créer des expériences mémorables 
          alliant professionnalisme, créativité et authenticité. Mon objectif est de dépasser les attentes tout en préservant les valeurs humaines.
        </p>
        <div className="inline-block bg-[#00C2A8] text-primary-900 font-bold text-lg md:text-xl p-4 rounded-xl">
          💎 Excellence • Innovation • Passion
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 bg-primary-800 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00C2A8] mb-8">Galerie & Réalisations</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-12">
          Découvrez mes créations et prestations. Chaque réalisation reflète mon professionnalisme et ma créativité.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                <span className="text-white text-lg font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#00C2A8] to-cyan-500 text-primary-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt(e) à vivre une expérience unique ?</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Que ce soit pour vos événements, votre beauté ou vos produits artisanaux, je suis là pour vous accompagner avec passion et excellence.
        </p>
        <a
          href="tel:+22901629949"
          className="inline-flex items-center bg-primary-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-primary-700 transition-all duration-300"
        >
          <Phone className="w-6 h-6 mr-2" />
          Contactez-moi dès maintenant
        </a>
      </section>

    </div>
  );
};

export default About;
