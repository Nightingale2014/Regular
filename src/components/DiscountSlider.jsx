// src/components/DiscountSlider.jsx

import React, { useState } from "react";
import discountData from "../data/discountData"; // 데이터 파일 경로 확인

const DiscountSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;
    const maxIndex = Math.ceil(discountData.length / itemsPerPage) - 1;

    const nextSlide = () => {
        if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    };

    const prevSlide = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const visibleItems = discountData.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <section className="my-12 px-4">
            <h2 className="text-2xl font-bold text-center mb-6">지금 할인중!</h2>

            <div className="relative">
                {/* 공연 카드 슬라이드 */}
                <div className="flex gap-4 transition-transform ease-in-out duration-300">
                    {visibleItems.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-52">
                            {/* ✅ 이미지 틀 */}
                            <div className="w-full h-72 overflow-hidden rounded-lg shadow">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* 공연 정보 */}
                            <div className="mt-2 text-sm leading-snug">
                                <div className="flex items-center space-x-1 mb-1">
                                    {item.badge && (
                                        <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                                    )}
                                    {item.dDay && (
                                        <span className="bg-white text-red-600 border border-red-400 text-xs font-bold px-1.5 py-0.5 rounded">
                      {item.dDay}
                    </span>
                                    )}
                                    {item.special && (
                                        <span className="bg-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      {item.special}
                    </span>
                                    )}
                                </div>
                                <p className="font-semibold line-clamp-2">{item.title}</p>
                                <p className="text-gray-500">{item.venue}</p>
                                <p className="text-gray-400">{item.date}</p>
                                <p className="text-purple-600 text-sm font-bold">{item.discount}</p>
                                <p className="text-red-500 font-bold">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 👉 슬라이드 화살표 버튼 */}
                {currentIndex > 0 && (
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow px-2 py-2"
                    >
                        &lt;
                    </button>
                )}
                {currentIndex < maxIndex && (
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow px-2 py-2"
                    >
                        &gt;
                    </button>
                )}
            </div>

            {/* 전체보기 버튼 */}
            <div className="mt-6 text-center">
                <button className="border px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition">
                    할인티켓 전체보기
                </button>
            </div>
        </section>
    );
};

export default DiscountSlider;
