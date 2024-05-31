import React from 'react';

function WeeklyRequirements({ fridgeItems, weeklyRequirements }) {
    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-violet-100 m-2 ">Weekly Requirements</h2>
            <ul className="list-disc list-inside">
                {Object.entries(weeklyRequirements).map(([itemName, requiredQuantity], index) => {
                    const currentQuantity = fridgeItems.reduce((acc, item) => item.name === itemName ? acc + item.quantity : acc, 0);
                    return (
                        <li key={index} className="w-fit pl-0.5 text-sm text-violet-100 m-2 ">
                            {itemName}: Required: {requiredQuantity}, In Stock: {currentQuantity}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default WeeklyRequirements;
