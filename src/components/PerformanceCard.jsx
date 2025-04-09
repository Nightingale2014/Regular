import React from 'react';

function PerformanceCard({ item }) {
    return (
        <div className="w-48 min-w-[12rem] mx-2 flex-shrink-0">
            <div className="relative">
                <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md shadow-md mb-2 w-full h-64 object-cover"
                />
                {item.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {item.discount} 할인
                    </div>
                )}
            </div>
            <div className="text-sm font-bold truncate">{item.title}</div>
            <div className="text-xs text-gray-500">{item.venue}</div>
            <div className="text-xs text-gray-500">{item.date}</div>
            <div className="text-red-600 font-semibold mt-1">{item.price}원</div>
        </div>
    );
}

export default PerformanceCard;
