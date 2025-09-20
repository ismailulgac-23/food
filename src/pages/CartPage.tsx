import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Organik Domates',
      price: 12.99,
      image: 'https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/60564/uploads/urunresimleri/buyuk/organik-pembe-domates-500-gr-8-4f81.jpg',
      quantity: 2,
      inStock: true
    },
    {
      id: 2,
      name: 'Taze Salatalık',
      price: 8.50,
      image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop',
      quantity: 1,
      inStock: true
    },
    {
      id: 3,
      name: 'Organik Havuç',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=300&fit=crop',
      quantity: 3,
      inStock: false
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 bg-grey-100 rounded-full flex items-center justify-center">
              <Icon icon="mdi:cart-outline" className="w-12 h-12 sm:w-16 sm:h-16 text-grey-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">Sepetiniz Boş</h1>
            <p className="text-text-secondary mb-6 sm:mb-8 text-base sm:text-lg px-4">
              Henüz sepetinize ürün eklemediniz. Hemen alışverişe başlayın!
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-2xl font-semibold text-base sm:text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              <Icon icon="mdi:home" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Alışverişe Başla
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-1 sm:mb-2">Sepetim</h1>
          <p className="text-text-secondary text-sm sm:text-base">{cartItems.length} ürün</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-6 bg-grey-50">
                <h2 className="text-lg sm:text-xl font-semibold text-text-primary">Sepetteki Ürünler</h2>
                <p className="text-text-secondary text-xs sm:text-sm mt-1">{cartItems.length} ürün sepetinizde</p>
              </div>
              
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-grey-50 rounded-2xl p-4 sm:p-6 hover:bg-grey-100 transition-all duration-300">
                    <div className="flex items-center space-x-3 sm:space-x-6">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-xl font-bold text-text-primary mb-1 sm:mb-2 line-clamp-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                          <div className={`w-2 h-2 rounded-full ${item.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                          <span className="text-text-secondary text-xs sm:text-sm font-medium">
                            {item.inStock ? 'Stokta var' : 'Stokta yok'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg sm:text-2xl font-bold text-text-primary">
                            {item.price}₺
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center bg-white rounded-2xl border border-gray-200">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 sm:p-3 hover:bg-grey-50 rounded-l-2xl transition-all duration-200 hover:scale-110"
                          >
                            <Icon icon="mdi:minus" className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary" />
                          </button>
                          <span className="px-3 sm:px-6 py-2 sm:py-3 text-text-primary font-bold text-sm sm:text-lg min-w-[3rem] sm:min-w-[4rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 sm:p-3 hover:bg-grey-50 rounded-r-2xl transition-all duration-200 hover:scale-110"
                          >
                            <Icon icon="mdi:plus" className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 sm:p-3 text-grey-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-200 hover:scale-110"
                        >
                          <Icon icon="mdi:delete" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 lg:sticky lg:top-8">
              <h2 className="text-lg sm:text-xl font-semibold text-text-primary mb-4 sm:mb-6">Sipariş Özeti</h2>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between text-text-secondary text-base sm:text-lg">
                  <span>Ara Toplam</span>
                  <span className="font-semibold">{subtotal.toFixed(2)}₺</span>
                </div>
                <div className="flex justify-between text-text-secondary text-base sm:text-lg">
                  <span>Kargo</span>
                  <span className={shipping === 0 ? 'text-green-500 font-bold' : 'font-semibold'}>
                    {shipping === 0 ? 'Ücretsiz' : `${shipping.toFixed(2)}₺`}
                  </span>
                </div>
                {shipping > 0 && (
                  <div className="text-xs sm:text-sm text-text-secondary bg-grey-50 p-3 sm:p-4 rounded-2xl">
                    <p className="font-medium">100₺ ve üzeri alışverişlerde kargo ücretsiz!</p>
                    <p className="text-primary font-bold mt-1 sm:mt-2 text-sm sm:text-base">
                      {(100 - subtotal).toFixed(2)}₺ daha alışveriş yapın
                    </p>
                  </div>
                )}
                <div className="bg-grey-50 p-3 sm:p-4 rounded-2xl">
                  <div className="flex justify-between text-xl sm:text-2xl font-bold text-text-primary">
                    <span>Toplam</span>
                    <span>{total.toFixed(2)}₺</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-primary text-white py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 mb-4 sm:mb-6">
                Siparişi Tamamla
              </button>
              
              <Link
                to="/"
                className="block w-full text-center text-text-secondary hover:text-primary transition-colors duration-200 py-2 sm:py-3 font-medium text-sm sm:text-base"
              >
                Alışverişe Devam Et
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;