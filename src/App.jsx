import React from "react";
import DiscountSlider from "./components/DiscountSlider";

function App() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center my-8">지금 할인중!</h2>
            <DiscountSlider />
        </div>
    );
}

export default App;
