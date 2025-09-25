import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Star, Truck, Shield, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const { addItem, items, updateQuantity } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: 'honey-classic-250g',
      name: 'Miel Classique ESHA',
      price: 2500,
      weight: '250g',
      image: 'https://i.ibb.co/qMSy9hrW/unnamed.png',
      description: 'Miel artisanal traditionnel aux saveurs authentiques, récolté dans les ruchers locaux.',
      benefits: ['100% naturel', 'Source d\'énergie', 'Propriétés antibactériennes']
    },
    {
      id: 'honey-premium-500g',
      name: 'Miel Premium ESHA',
      price: 4500,
      weight: '500g',
      image: 'https://i.ibb.co/xSkD0Jj2/e40926daa7600c5de6e6436d0d430c44.jpg',
      description: 'Miel premium de qualité supérieure, texture onctueuse et goût délicat.',
      benefits: ['Qualité premium', 'Récolte sélective', 'Arômes complexes']
    },
    {
      id: 'honey-forest-350g',
      name: 'Miel de Forêt ESHA',
      price: 3200,
      weight: '350g',
      image: 'https://i.ibb.co/d4szj77Y/b06437205b45f63e77f965e544573029.jpg',
      description: 'Miel de forêt aux notes boisées, riche en minéraux et antioxydants.',
      benefits: ['Goût unique', 'Riche en antioxydants', 'Propriétés thérapeutiques']
    },
    {
      id: 'honey-gift-box',
      name: 'Coffret Découverte ESHA',
      price: 8500,
      weight: 'Coffret 3x250g',
      image: 'https://i.ibb.co/yFRvRDXy/4bc59f0f212996b5397216daf512de34.jpg',
      description: 'Coffret élégant avec nos trois miels signature pour découvrir toute la gamme.',
      benefits: ['Coffret cadeau', '3 variétés', 'Emballage premium']
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const getItemQuantity = (productId: string) => {
    const item = items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 text-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Boutique <span className="text-white">ESHA</span> 🍯
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Découvrez notre gamme exceptionnelle de miels artisanaux de qualité premium. 
                Chaque pot raconte l'histoire de nos abeilles et de notre terroir.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">100% Naturel</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">Production Artisanale</span>
                </div>
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <Truck className="w-5 h-5" />
                  <span className="font-semibold">Livraison Rapide</span>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <img
                src="https://i.ibb.co/qMSy9hrW/unnamed.png"
                alt="Miel ESHA - Produits artisanaux"
                className="w-80 h-80 object-cover rounded-full mx-auto shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Nos Miels d'Exception
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque produit ESHA est le fruit d'un savoir-faire artisanal transmis avec passion. 
              Goûtez à l'excellence de nos miels authentiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => {
              const quantity = getItemQuantity(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {product.weight}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-500">
                          {product.price.toLocaleString()} CFA
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit, index) => (
                          <span
                            key={index}
                            className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {quantity > 0 ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="text-sm text-gray-600">
                          Dans le panier
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart size={18} />
                        <span>Ajouter au panier</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {items.length > 0 && (
        <section className="py-12 bg-white border-t-2 border-yellow-400">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center space-x-2">
                <ShoppingCart size={24} />
                <span>Récapitulatif de votre commande</span>
              </h3>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-600 text-sm block">x{item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-bold text-blue-900">
                      {(item.price * item.quantity).toLocaleString()} CFA
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-blue-900">Total:</span>
                <span className="text-2xl font-bold text-yellow-600">
                  {items.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()} CFA
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors">
                  💳 Carte Bancaire
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  📱 Mobile Money
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  🅿️ PayPal
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose ESHA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Pourquoi choisir ESHA ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualité Garantie</h3>
              <p className="text-gray-300">
                Miels 100% purs, sans additifs, contrôlés à chaque étape de production.
              </p>
            </div>
            <div>
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion Artisanale</h3>
              <p className="text-gray-300">
                Chaque pot reflète notre amour pour l'apiculture traditionnelle.
              </p>
            </div>
            <div>
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Livraison Soignée</h3>
              <p className="text-gray-300">
                Emballage sécurisé et livraison rapide pour préserver la fraîcheur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;