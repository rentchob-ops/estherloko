import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Scissors, Sparkles, HandHeart, Star } from "lucide-react";

export default function Home() {
  // Témoignages
  const testimonials = [
    {
      name: "Directeur Marketing, Entreprise Tech",
      text: "Service d'hôtesse exceptionnel lors de notre séminaire. Professionnelle, souriante et très organisée. Je recommande vivement !",
      stars: 5,
    },
    {
      name: "Cliente fidèle",
      text: "Coiffures magnifiques et créatives ! Esther a un talent remarquable. Le miel ESHA est aussi délicieux, qualité artisanale exceptionnelle.",
      stars: 5,
    },
    {
      name: "Client Événementiel",
      text: "L’accueil a été irréprochable. Tout était parfaitement organisé et chaleureux. Très professionnel !",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary-900 text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-24 md:pt-32">
        {/* Bulles animées */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-36 h-36 bg-[#00C2A8] rounded-full opacity-20 animate-bounce-slow"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-800/90"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Texte */}
          <div className="animate-zoom border-4 border-double border-[#00C2A8] p-4 md:p-6 rounded-2xl shadow-lg space-y-4 max-w-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-[#00C2A8]">
              Bienvenue sur ma page web, je suis :
            </h2>

            {/* Nom en typewriter */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight overflow-hidden whitespace-nowrap border-r-4 border-[#00C2A8] pr-1">
              <span className="typewriter">Akpedjè Esther LOKO</span>
            </h1>

            <p className="text-base md:text-lg text-gray-200 max-w-full">
              Votre partenaire de confiance pour l&apos;excellence dans{" "}
              <span className="text-[#00C2A8] font-semibold">l&apos;accueil professionnel</span>, la{" "}
              <span className="text-[#00C2A8] font-semibold">beauté capillaire</span> et les{" "}
              <span className="text-[#00C2A8] font-semibold">produits artisanaux</span> de qualité.
              <br />
              <span className="text-[#00C2A8] font-bold">
                Ensemble, créons des expériences mémorables.
              </span>
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="tel:+22901629949"
                className="group relative overflow-hidden px-6 py-3 rounded-lg font-bold flex items-center justify-center text-primary-900 shadow-md"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00C2A8] to-cyan-500 animate-gradient-x transition-transform duration-500"></span>
                <span className="relative flex items-center space-x-2 text-white z-10">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Réservez maintenant</span>
                </span>
              </a>
              <Link
                to="/about"
                className="relative overflow-hidden px-6 py-3 rounded-lg font-semibold flex items-center justify-center border-2 border-[#00C2A8] text-[#00C2A8] shadow-md group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00C2A8] to-cyan-500 opacity-30 group-hover:opacity-60 transition-all rounded-lg"></span>
                <span className="relative flex items-center space-x-2 text-white z-10 group-hover:text-white">
                  <span>Découvrir mon parcours</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:text-center">
            <img
              src="https://i.ibb.co/fd33pPjS/profile-pic-5.png"
              alt="Akpedjè Esther LOKO"
              className="w-72 h-72 object-cover rounded-full mx-auto shadow-2xl border-4 border-[#00C2A8] transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-[#00C2A8]">
            Mes Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card">
              <Scissors className="w-12 h-12 mx-auto text-[#00C2A8]" />
              <h3 className="text-xl font-semibold mt-4">Beauté Capillaire</h3>
              <p className="text-gray-300 mt-2">
                Des coiffures modernes, créatives et adaptées à chaque personnalité.
              </p>
            </div>
            <div className="service-card">
              <Sparkles className="w-12 h-12 mx-auto text-[#00C2A8]" />
              <h3 className="text-xl font-semibold mt-4">Accueil Professionnel</h3>
              <p className="text-gray-300 mt-2">
                Un service client chaleureux et raffiné pour vos événements et entreprises.
              </p>
            </div>
            <div className="service-card">
              <HandHeart className="w-12 h-12 mx-auto text-[#00C2A8]" />
              <h3 className="text-xl font-semibold mt-4">Produits Artisanaux</h3>
              <p className="text-gray-300 mt-2">
                Une sélection de produits artisanaux faits avec passion et authenticité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#00C2A8]">
            Ce que disent mes clients
          </h2>

          <div className="bg-white bg-opacity-10 p-10 rounded-xl backdrop-blur-md transition-all duration-500 shadow-lg">
            <div className="flex justify-center mb-4">
              {Array(testimonials[currentIndex].stars)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#00C2A8]" />
                ))}
            </div>
            <p className="text-lg italic mb-4">{`"${testimonials[currentIndex].text}"`}</p>
            <p className="font-semibold">{`- ${testimonials[currentIndex].name}`}</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-20 bg-gradient-to-br from-[#00C2A8] to-cyan-500 text-primary-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt(e) à vivre une expérience unique ?
          </h2>
          <p className="text-lg mb-8">
            Que ce soit pour vos événements, votre beauté ou vos besoins en produits artisanaux,
            <br /> je suis là pour vous accompagner avec passion et excellence.
          </p>
          <a
            href="tel:+22901629949"
            className="inline-flex items-center bg-primary-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-primary-700 transition-all duration-300"
          >
            <Phone className="w-6 h-6 mr-2" />
            Contactez-moi dès maintenant
          </a>
        </div>
      </section>

      {/* TikTok Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#00C2A8]">
            Retrouvez-moi sur TikTok
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Cliquez sur les vidéos pour les voir directement sur TikTok !
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Vidéo 1", link: "https://vm.tiktok.com/ZMAPFnjGJ/" },
              { title: "Vidéo 2", link: "https://vm.tiktok.com/ZMAPYNfFq/" },
              { title: "Vidéo 3", link: "https://vm.tiktok.com/ZMAPYerNp/" },
              { title: "Vidéo 4", link: "https://vm.tiktok.com/ZMAPFo8Ae/" },
              { title: "Vidéo 5", link: "https://vm.tiktok.com/ZMAPYRDfk/" },
            ].map((video, index) => (
              <a
                key={index}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black bg-opacity-70 hover:bg-opacity-90 text-white font-bold rounded-xl px-6 py-8 shadow-lg transition-all duration-300 hover:scale-105"
              >
                {video.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>
        {`
          /* Zoom animation for Hero */
          @keyframes zoomInOut {0%,100%{transform:scale(1);}50%{transform:scale(1.05);}}
          .animate-zoom { animation: zoomInOut 6s ease-in-out infinite; }

          /* Typewriter looping */
          @keyframes typing {0% { width: 0 } 40%, 60% { width: 100% } 100% { width: 0 }}
          @keyframes blink {50% { border-color: transparent }}
          .typewriter { display:inline-block; overflow:hidden; white-space:nowrap; border-right:.15em solid #00C2A8; animation: typing 6s steps(30,end) infinite, blink .75s step-end infinite; }

          /* Gradient animation text */
          @keyframes gradientX { 0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;} }
          .animate-gradient-x { background-size:200% 200%; animation:gradientX 6s ease infinite; }

          /* Service cards */
          .service-card { background: rgba(255,255,255,0.05); border:1px solid rgba(0,194,168,0.3); border-radius:1rem; padding:2rem 1.5rem; transition: all 0.4s ease-in-out;}
          .service-card:hover { transform: translateY(-8px) scale(1.03); border-color:#00C2A8; background:rgba(0,194,168,0.1); box-shadow:0 8px 24px rgba(0,194,168,0.3); }

          /* Bulles animées */
          @keyframes bounceSlow {0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
          .animate-bounce-slow { animation:bounceSlow 10s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
}
