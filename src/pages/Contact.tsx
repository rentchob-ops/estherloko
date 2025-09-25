import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Linkedin, Instagram, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const services = [
    'Hôtesse d\'accueil événementiel',
    'Secrétariat & assistanat',
    'Coiffure & tresses',
    'Commande miel ESHA',
    'Consultation générale',
    'Autre (préciser dans le message)'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Travaillons <span className="text-yellow-400">Ensemble</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Prêt à concrétiser votre projet ? Contactez-moi dès maintenant pour échanger 
            sur vos besoins et découvrir comment je peux vous accompagner.
          </p>
          <a
            href="tel:+22901629949 10"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Appel direct : +229 01 62 99 49 10</span>
          </a>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Envoyez-moi un message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-green-600">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Décrivez votre projet, vos besoins, dates souhaitées, budget approximatif..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-blue-900 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Contact Direct</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+22901629949 10"
                    className="flex items-center space-x-3 hover:text-yellow-400 transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    <div>
                      <span className="block font-semibold">+229 01 62 99 49 10</span>
                      <span className="text-gray-300 text-sm">Appel direct (recommandé)</span>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@estherlokoservices.com"
                    className="flex items-center space-x-3 hover:text-yellow-400 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                    <div>
                      <span className="block font-semibold">contact@estherlokoservices.com</span>
                      <span className="text-gray-300 text-sm">Email professionnel</span>
                    </div>
                  </a>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6" />
                    <div>
                      <span className="block font-semibold">Cotonou, Bénin</span>
                      <span className="text-gray-300 text-sm">Zone de service principale</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center space-x-2">
                  <Clock className="w-6 h-6" />
                  <span>Heures d'activité</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-semibold text-blue-900">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-semibold text-blue-900">9h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="text-gray-500">Sur rendez-vous</span>
                  </div>
                  <div className="border-t pt-3 mt-4">
                    <p className="text-sm text-gray-600">
                      <strong>Urgences :</strong> Disponible 24h/7j pour les événements planifiés
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-yellow-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Suivez-moi sur les réseaux
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  Découvrez mes dernières réalisations, conseils beauté et actualités ESHA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Questions Fréquentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">🕐 Délai de réponse</h4>
              <p className="text-gray-600">Je réponds généralement sous 2-4 heures en semaine.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">💰 Devis gratuit</h4>
              <p className="text-gray-600">Consultation et devis personnalisé sans engagement.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">📍 Zone d'intervention</h4>
              <p className="text-gray-600">Cotonou et environs, déplacements sur demande.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">🍯 Livraison ESHA</h4>
              <p className="text-gray-600">Livraison gratuite à Cotonou dès 5000 CFA d'achat.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;