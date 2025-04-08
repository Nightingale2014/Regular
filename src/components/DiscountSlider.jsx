// src/components/DiscountSlider.jsx
import React, { useState } from 'react'; // React는 한 번만 임포트
import { discountData } from '../data/discountData'; // 데이터 불러오기

const DiscountSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(discountData.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getCurrentItems = () => {
    const start = currentIndex * itemsPerPage;
    return discountData.slice(start, start + itemsPerPage);
  };

  return (
    <div className="relative">
      <div className="flex gap-4 overflow-hidden px-8 py-4">
        {getCurrentItems().map((item) => (
          <div key={item.id} className="min-w-[220px] flex-shrink-0">
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-3">
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.location}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
                <p className="text-sm font-bold text-red-500 mt-1">
                  {item.discount} <span className="text-black">{item.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={handlePrev} className="bg-gray-600 text-white p-2 rounded-full">
          &#60;
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button onClick={handleNext} className="bg-gray-600 text-white p-2 rounded-full">
          &#62;
        </button>
      </div>
    </div>
  );
}

export default DiscountSlider;
