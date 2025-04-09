import React from "react";
import discountData from "../data/discountData"; // 데이터 파일 경로 맞게 수정

const DiscountSlider = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center my-8">지금 할인중!</h2>
            <div className="flex overflow-x-auto space-x-4 px-4">
                {discountData.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-52">
                        <img src={item.image} alt={item.title} className="rounded-lg shadow" />
                        <div className="mt-2 text-sm">
                            <p className="text-red-600 font-bold">{item.badge}</p>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-gray-500">{item.venue}</p>
                            <p className="text-gray-400">{item.date}</p>
                            <p className="text-purple-600 font-bold">{item.discount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscountSlider;
