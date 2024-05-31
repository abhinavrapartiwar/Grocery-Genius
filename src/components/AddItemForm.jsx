import React, { useState } from 'react';

function AddItemForm({ addItem }) {
    const [itemName, setItemName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!itemName || !expiryDate) return;
        addItem(itemName, expiryDate, quantity);
        setItemName('');
        setExpiryDate('');
        setQuantity(1);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap items-end">
            <div className="flex w-full max-w-xs flex-col gap-1 text-slate-600 dark:text-violet-100 m-2 ">
                <label className="w-fit pl-0.5 text-sm">Pantry Picks</label>
                <input
                    type="text"
                    placeholder="Pantry Picks"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full rounded-2xl bg-gray-100 px-2 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900/50 dark:focus-visible:outline-lime-400"
                />
            </div>
            <div className="flex w-full max-w-xs flex-col gap-1 text-slate-600 dark:text-violet-100 m-2 ">
                <label className="w-fit pl-0.5 text-sm">Expiry Date</label>
                <input
                    type="date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full rounded-2xl bg-gray-100 px-2 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900/50 dark:focus-visible:outline-lime-400"
                />
            </div>
            <div className="flex w-full max-w-xs flex-col gap-1 text-slate-600 dark:text-violet-100 m-2 ">
                <label className="w-fit pl-0.5 text-sm">Market Purchases</label>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full rounded-2xl bg-gray-100 px-2 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900/50 dark:focus-visible:outline-lime-400"
                />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded m-2 ">Add Item</button>
        </form>
    );
}

export default AddItemForm;
