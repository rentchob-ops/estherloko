import React from "react";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-primary-900 font-bold text-lg">AL</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">Akpedjè Esther</span>
                <span className="text-secondary-400 font-bold text-xl"> LOKO</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professionnalisme, créativité & entreprenariat au service de vos besoins.
              Hôtesse d'accueil, coiffeuse passionnée et entrepreneure avec la marque ESHA.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-400">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+22901629949"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>+229 01 62 99 49 10</span>
              </a>
              <a
                href="mailto:contact@estherlokoservices.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>contact@estherlokoservices.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-400">Réseaux Sociaux</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1CuM1TRzK7/"
                className="text-gray-300 hover:text-secondary-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/akp%C3%A9dj%C3%A9-esther-loko-204764226"
                className="text-gray-300 hover:text-secondary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/akpedjeesther/"
                className="text-gray-300 hover:text-secondary-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center space-y-2">
          <p className="text-gray-400">
            © 2025 Akpedjè Esther LOKO. Tous droits réservés.
          </p>
          <p className="text-gray-400">
            / site créé par Rénato TCHOBO /
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
