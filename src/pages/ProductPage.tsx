import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    id: 1,
    name: 'Organik Domates',
    price: 12.99,
    originalPrice: 15.99,
    discount: 19,
    rating: 4.8,
    reviews: 124,
    image: 'https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/60564/uploads/urunresimleri/buyuk/organik-pembe-domates-500-gr-8-4f81.jpg',
    images: [
      'https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/60564/uploads/urunresimleri/buyuk/organik-pembe-domates-500-gr-8-4f81.jpg',
      'https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/60564/uploads/urunresimleri/buyuk/organik-pembe-domates-500-gr-8-4f81.jpg',
      'https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/60564/uploads/urunresimleri/buyuk/organik-pembe-domates-500-gr-8-4f81.jpg'
    ],
    description: 'Taze, organik ve lezzetli domatesler. Doğal yöntemlerle yetiştirilmiş, hiçbir kimyasal madde kullanılmamıştır.',
    features: [
      '100% Organik',
      'Taze Hasat',
      'Vitamin A, C, K açısından zengin',
      'Doğal yetiştirme',
      'Günlük tüketim için ideal'
    ],
    options: [
      {
        name: 'Boyut',
        type: 'radio',
        required: true,
        choices: [
          { value: 'small', label: 'Küçük (500g)', price: 0 },
          { value: 'medium', label: 'Orta (1kg)', price: 2 },
          { value: 'large', label: 'Büyük (1.5kg)', price: 4 }
        ]
      },
      {
        name: 'Paketleme',
        type: 'radio',
        required: true,
        choices: [
          { value: 'normal', label: 'Normal Paket', price: 0 },
          { value: 'premium', label: 'Premium Paket', price: 3 },
          { value: 'gift', label: 'Hediye Paketi', price: 5 }
        ]
      },
      {
        name: 'Ekstra',
        type: 'radio',
        required: false,
        choices: [
          { value: 'none', label: 'Ekstra Yok', price: 0 },
          { value: 'organic', label: 'Organik Sertifika', price: 2 },
          { value: 'delivery', label: 'Özel Teslimat', price: 8 }
        ]
      }
    ],
    inStock: true,
    stockCount: 15,
    category: 'Sebze & Meyve',
    brand: 'Organik Bahçe'
  };

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };

  const calculateTotalPrice = () => {
    let total = product.price;
    Object.values(selectedOptions).forEach(optionValue => {
      product.options.forEach(option => {
        const choice = option.choices.find(c => c.value === optionValue);
        if (choice) {
          total += choice.price;
        }
      });
    });
    return total * quantity;
  };

  const handleAddToCart = () => {
    console.log('Sepete eklendi:', {
      productId: product.id,
      quantity,
      options: selectedOptions,
      totalPrice: calculateTotalPrice()
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-text-secondary">
            <li><a href="/" className="hover:text-primary">Ana Sayfa</a></li>
            <li>/</li>
            <li><a href="/category/sebze-meyve" className="hover:text-primary">{product.category}</a></li>
            <li>/</li>
            <li className="text-text-primary">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className="w-20 h-20 bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-grey-300 transition-colors duration-200"
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-text-secondary">{product.brand}</span>
                <span className="text-text-secondary">•</span>
                <span className="text-sm text-text-secondary">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-text-primary mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        icon="mdi:star"
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-grey-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-text-secondary">{product.rating} ({product.reviews} değerlendirme)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-text-primary">{product.price}₺</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-text-secondary line-through">{product.originalPrice}₺</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-sm font-semibold">
                    -%{product.discount}
                  </span>
                </>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Açıklama</h3>
              <p className="text-text-secondary leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Özellikler</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-text-secondary">
                    <Icon icon="mdi:check" className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {product.options.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon 
                    icon={
                      option.name === 'Boyut' ? 'mdi:resize' :
                      option.name === 'Paketleme' ? 'mdi:package-variant' :
                      'mdi:plus-circle'
                    } 
                    className="w-5 h-5 text-primary" 
                  />
                  <h3 className="text-lg font-semibold text-text-primary">
                    {option.name} {option.required && <span className="text-red-500">*</span>}
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {option.choices.map((choice) => (
                    <button
                      key={choice.value}
                      onClick={() => handleOptionChange(option.name, choice.value)}
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] ${
                        selectedOptions[option.name] === choice.value
                          ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            selectedOptions[option.name] === choice.value
                              ? 'border-primary bg-primary'
                              : 'border-gray-300 group-hover:border-gray-400'
                          }`}>
                            {selectedOptions[option.name] === choice.value && (
                              <Icon 
                                icon="mdi:check" 
                                className="w-4 h-4 text-white" 
                              />
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            {choice.value === 'small' && <Icon icon="mdi:size-xs" className="w-4 h-4 text-gray-400" />}
                            {choice.value === 'medium' && <Icon icon="mdi:size-s" className="w-4 h-4 text-gray-400" />}
                            {choice.value === 'large' && <Icon icon="mdi:size-m" className="w-4 h-4 text-gray-400" />}
                            {choice.value === 'normal' && <Icon icon="mdi:package" className="w-4 h-4 text-gray-400" />}
                            {choice.value === 'premium' && <Icon icon="mdi:package-variant-closed" className="w-4 h-4 text-gray-400" />}
                            {choice.value === 'gift' && <Icon icon="mdi:gift" className="w-4 h-4 text-gray-400" />}
                            {choice.value === 'organic' && <Icon icon="mdi:leaf" className="w-4 h-4 text-green-500" />}
                            {choice.value === 'delivery' && <Icon icon="mdi:truck-delivery" className="w-4 h-4 text-blue-500" />}
                            <span className={`font-medium transition-colors duration-300 ${
                              selectedOptions[option.name] === choice.value
                                ? 'text-primary'
                                : 'text-text-primary group-hover:text-text-primary'
                            }`}>
                              {choice.label}
                            </span>
                          </div>
                        </div>
                        {choice.price > 0 && (
                          <span className={`px-3 py-1 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            selectedOptions[option.name] === choice.value
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 text-text-secondary group-hover:bg-gray-200'
                          }`}>
                            +{choice.price}₺
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-text-primary">Miktar</span>
                <div className="flex items-center bg-grey-100 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-grey-200 rounded-l-xl transition-colors duration-200"
                  >
                    <Icon icon="mdi:minus" className="w-4 h-4 text-text-secondary" />
                  </button>
                  <span className="px-4 py-2 text-text-primary font-semibold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-grey-200 rounded-r-xl transition-colors duration-200"
                  >
                    <Icon icon="mdi:plus" className="w-4 h-4 text-text-secondary" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-text-primary">{calculateTotalPrice().toFixed(2)}₺</span>
                  <p className="text-text-secondary text-sm">Toplam fiyat</p>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-xl transition-colors duration-200 ${
                    isFavorite 
                      ? 'bg-red-50 text-red-500' 
                      : 'bg-grey-100 text-grey-400 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Icon 
                    icon={isFavorite ? "mdi:heart" : "mdi:heart-outline"} 
                    className="w-6 h-6" 
                  />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  product.inStock
                    ? 'bg-primary text-white hover:bg-primary-dark transform hover:scale-105'
                    : 'bg-grey-300 text-grey-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Sepete Ekle' : 'Stokta Yok'}
              </button>

              {product.inStock && (
                <p className="text-center text-text-secondary text-sm mt-2">
                  Stokta {product.stockCount} adet kaldı
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;