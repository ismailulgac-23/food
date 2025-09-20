import React from 'react';
import { Link } from 'react-router-dom';

const PopularProducts: React.FC = () => {
  const products = [
    {
      id: 7,
      name: 'Kırmızı Elma',
      price: '₺12',
      image: 'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/8016/uploads/urunresimleri/buyuk/malus-domestica-ici-disi-kirmizi-elma--6-f25e.jpg',
      category: 'Manav Reyonu'
    },
    {
      id: 8,
      name: 'Dana Kıyma',
      price: '₺180',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2GZ-ebzVVtSNUYq5fV0a6FDp2sizCdvIoBw&s',
      category: 'Et Reyonu'
    },
    {
      id: 9,
      name: 'Yarım Yağlı Süt',
      price: '₺25',
      image: 'https://prod-cdn-r2.sutas.market/638555368715085319.jpg',
      category: 'Süt Ürünleri'
    }
  ];

  return (
    <div className="space-y-6">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="group flex items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
        >
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="ml-6 flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-1">
              {product.name}
            </h3>
            <p className="text-text-secondary text-sm mb-2">
              {product.category}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">
                {product.price}
              </span>
              <button className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularProducts;
