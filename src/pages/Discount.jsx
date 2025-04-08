// src/pages/Discount.jsx
import React from 'react';
import DiscountSlider from '../components/DiscountSlider';

export default function Discount() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-4">지금 할인 중인 공연!</h1>
      <DiscountSlider />  {/* Router는 여기서 사용하지 말고 App.jsx에서만 사용 */}
    </div>
  );
}
