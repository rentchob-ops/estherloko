import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Briefcase, Scissors, Palette, Camera, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const hostessServices = [
    "Séminaires et conférences d'entreprise",
    "Lancements de produits et événements marketing",
    "Salons professionnels et foires commerciales",
    "Cérémonies académiques et remises de diplômes",
    "Événements privés et réceptions VIP",
    "Accueil client et gestion des invités"
  ];

  const secretariatServices = [
    "Gestion administrative et organisationnelle",
    "Planification et coordination d'événements",
    "Rédaction et mise en forme de documents",
    "Gestion des agendas et des rendez-vous",
    "Accueil téléphonique et physique",
    "Support logistique pour réunions"
  ];

  const hairdressingServices = [
    "Tresses africaines traditionnelles et modernes",
    "Coiffures créatives pour événements",
    "Mise en beauté personnalisée",
    "Conseils en styling capillaire",
    "Coiffures de mariage et cérémonies",
    "Transformations avant/après documentées"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-yellow-400">Services</span> d'Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une gamme complète de services professionnels adaptés à vos besoins spécifiques, 
            avec un engagement constant vers l'excellence et la satisfaction client.
          </p>
        </div>
      </section>

      {/* Hostess Services */}
      <section id="hostess" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-900 p-3 rounded-full">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  Hôtesse d'Accueil Professionnelle
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Services d'hôtesse d'accueil de haute qualité pour vos événements professionnels 
                et privés. Représentation impeccable de votre image de marque avec sourire, 
                professionnalisme et attention aux détails.
              </p>
              
              <div className="space-y-3">
                {hostessServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Réservez ce service</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://i.ibb.co/TDv4BvbX/4c939c3a-8cb8-44e9-9b06-7218dea81abd.jpg"
                alt="Service d'hôtesse professionnelle"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secretariat Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://i.ibb.co/bMQwsKnV/59b3786eeeb5ad8e0f906181701e4fe3.jpg"
                alt="Services de secrétariat et assistanat"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Briefcase className="w-8 h-8 text-blue-900" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  Secrétariat & Assistanat
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Services complets de secrétariat et d'assistanat de direction pour optimiser 
                votre organisation. Gestion administrative efficace et support logistique 
                personnalisé selon vos besoins.
              </p>
              
              <div className="space-y-3">
                {secretariatServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Réservez ce service</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hairdressing Services */}
      <section id="hairdressing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-full">
                  <Scissors className="w-8 h-8 text-blue-900" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                  Coiffure & Tresses Créatives
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Passion pour l'art capillaire et les tresses africaines. Créations personnalisées 
                qui subliment votre beauté naturelle avec des techniques traditionnelles et contemporaines.
              </p>
              
              <div className="space-y-3">
                {hairdressingServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Réservez ce service</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://i.ibb.co/jPZhRQtG/56d6dc0c57ba46b7f322c87c4309c2ab.jpg"
                alt="Services de coiffure et tresses"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
              Galerie Avant/Après - Mes Créations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://i.ibb.co/RkNZBH8c/14c6ffcc-a660-4cfe-83f5-7239c0a31832.jpg",
                "https://i.ibb.co/XxcCtXyt/444ed232-b456-40d5-98e8-5f2ec419b565.jpg",
                "https://i.ibb.co/C5VsN7n5/ada4de35-ea6d-4102-8d3a-715ec180c36e.jpg",
                "https://i.ibb.co/jPZhRQtG/56d6dc0c57ba46b7f322c87c4309c2ab.jpg"
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Création coiffure ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tarifs Personnalisés
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Chaque projet est unique. Contactez-moi pour recevoir un devis personnalisé 
            adapté à vos besoins spécifiques et à votre budget.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Consultation Gratuite</h3>
              <p className="text-sm text-gray-300">Évaluation de vos besoins</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Palette className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Devis Personnalisé</h3>
              <p className="text-sm text-gray-300">Tarifs adaptés à votre projet</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <Camera className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Suivi Photo</h3>
              <p className="text-sm text-gray-300">Documentation des résultats</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+22901629949 10"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              📞 Appel immédiat
            </a>
            <Link
              to="/contact"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;