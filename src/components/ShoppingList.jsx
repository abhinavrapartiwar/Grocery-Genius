import React from 'react';

function ShoppingList({ fridgeItems, weeklyRequirements }) {
    const shoppingList = Object.keys(weeklyRequirements).map((itemName) => {
        const currentQuantity = fridgeItems.reduce((acc, item) => {
            return item.name === itemName ? acc + item.quantity : acc;
        }, 0);
        const requiredQuantity = weeklyRequirements[itemName];
        const quantityNeeded = requiredQuantity - currentQuantity;
        return {
            name: itemName,
            quantityNeeded: quantityNeeded > 0 ? quantityNeeded : 0,
        };
    }).filter(item => item.quantityNeeded > 0);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-violet-100 m-2 " >Shopping List</h2>
            <ul className="list-disc list-inside">
                {shoppingList.map((item, index) => (
                    <li key={index} className="mb-2 text-violet-100 m-2 ">
                        {item.name} (x{item.quantityNeeded})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
