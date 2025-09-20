import React from 'react';
import { Link } from 'react-router-dom';

const NewProducts: React.FC = () => {
  const products = [
    {
      id: 10,
      name: 'Avokado',
      price: '₺30',
      image: 'https://cdn.scope.digital/Images/Articles/avokadonun-faydalari-nelerdir-avokado-nasil-tuketilir-5618716.jpg?tr=w-630,h-420',
      category: 'Egzotik Meyveler'
    },
    {
      id: 11,
      name: 'Tam Buğday Ekmek',
      price: '₺20',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFe8P0B66Yf5GnNS5yDd7mW9wQAvkqGzLiIg&s',
      category: 'Fırın Reyonu'
    },
    {
      id: 12,
      name: 'Bitter Çikolata',
      price: '₺18',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1U82HKAe8qYUY1wo5Y1HOlwaeS-K_nXSNQ&s',
      category: 'Atıştırmalıklar'
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

export default NewProducts;
