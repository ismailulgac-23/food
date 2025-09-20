import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const user = {
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    phone: '+90 555 123 45 67',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    joinDate: 'Ocak 2024',
    totalOrders: 24,
    totalSpent: 1250.50
  };

  const recentOrders = [
    {
      id: 'ORD-001',
      date: '15 Mart 2024',
      status: 'Teslim Edildi',
      total: 89.50,
      items: 3,
      products: [
        { name: 'Organik Domates', price: 12.99, quantity: 2, image: 'https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/60564/uploads/urunresimleri/buyuk/organik-pembe-domates-500-gr-8-4f81.jpg' },
        { name: 'Taze Salatalık', price: 8.50, quantity: 1, image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop' }
      ]
    },
    {
      id: 'ORD-002',
      date: '10 Mart 2024',
      status: 'Kargoda',
      total: 156.75,
      items: 5,
      products: [
        { name: 'Organik Havuç', price: 6.99, quantity: 3, image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=300&fit=crop' },
        { name: 'Taze Soğan', price: 4.25, quantity: 2, image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=300&h=300&fit=crop' }
      ]
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profil Bilgileri', icon: 'mdi:account' },
    { id: 'orders', label: 'Siparişlerim', icon: 'mdi:package-variant' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Profilim</h1>
          <p className="text-text-secondary">Hesap bilgilerinizi yönetin</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
              <nav className="space-y-1 p-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-4 px-6 py-4 text-left transition-all duration-300 rounded-2xl ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-grey-50 hover:text-text-primary'
                    }`}
                  >
                    <Icon icon={tab.icon} className="w-5 h-5" />
                    <span className="font-semibold">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">{user.name}</h2>
                <p className="text-text-secondary text-sm mb-6">{user.email}</p>
                <div className="flex justify-center space-x-6 text-sm text-text-secondary">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-text-primary">{user.totalOrders}</p>
                    <p className="font-medium">Sipariş</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-text-primary">{user.totalSpent.toFixed(2)}₺</p>
                    <p className="font-medium">Harcama</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-8">Profil Bilgileri</h2>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-3">Ad Soyad</label>
                      <input
                        type="text"
                        value={user.name}
                        className="w-full px-6 py-4 bg-grey-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-primary transition-all duration-300 text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-3">E-posta</label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full px-6 py-4 bg-grey-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-primary transition-all duration-300 text-lg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button className="px-8 py-4 bg-grey-100 text-text-secondary rounded-2xl hover:bg-grey-200 transition-all duration-300 font-semibold">
                      İptal
                    </button>
                    <button className="px-8 py-4 bg-primary text-white rounded-2xl hover:bg-primary-dark transition-all duration-300 font-bold transform hover:scale-105">
                      Kaydet
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-text-primary mb-6">Siparişlerim</h2>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="bg-grey-50 rounded-2xl border border-gray-200 overflow-hidden">
                      <div className="p-4 hover:bg-grey-100 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="mb-3 sm:mb-0">
                            <h3 className="text-lg font-semibold text-text-primary">Sipariş #{order.id}</h3>
                            <p className="text-text-secondary text-sm">{order.date}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="text-lg font-bold text-text-primary">{order.total}₺</p>
                              <p className="text-text-secondary text-sm">{order.items} ürün</p>
                            </div>
                            <button 
                              onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                              className="px-4 py-2 bg-white text-text-secondary rounded-xl hover:bg-grey-50 transition-all duration-300 text-sm font-medium border border-gray-200 flex items-center space-x-2"
                            >
                              <span>Detay</span>
                              <Icon 
                                icon={expandedOrder === order.id ? "mdi:chevron-up" : "mdi:chevron-down"} 
                                className="w-4 h-4" 
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {expandedOrder === order.id && (
                        <div className="border-t border-gray-200 p-4 bg-white">
                          <h4 className="text-sm font-semibold text-text-primary mb-3">Sipariş Detayları</h4>
                          <div className="space-y-3">
                            {order.products.map((product, index) => (
                              <div key={index} className="flex items-center space-x-3 p-3 bg-grey-50 rounded-xl">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                  <h5 className="text-sm font-medium text-text-primary">{product.name}</h5>
                                  <p className="text-xs text-text-secondary">Miktar: {product.quantity}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-semibold text-text-primary">{product.price}₺</p>
                                  <p className="text-xs text-text-secondary">Toplam: {(product.price * product.quantity).toFixed(2)}₺</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;