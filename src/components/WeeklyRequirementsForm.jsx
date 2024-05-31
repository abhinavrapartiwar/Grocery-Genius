import React, { useState } from 'react';

function WeeklyRequirementsForm({ updateWeeklyRequirements }) {
    const [itemName, setItemName] = useState('');
    const [requiredQuantity, setRequiredQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!itemName || !requiredQuantity) return;
        updateWeeklyRequirements(itemName, requiredQuantity);
        setItemName('');
        setRequiredQuantity(1);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap items-end">
            <div className="flex w-full max-w-xs flex-col gap-1 text-slate-600 dark:text-violet-100  m-2 ">
                <label className="w-fit pl-0.5 text-sm text-violet-100">Pantry Picks</label>
                <input
                    type="text"
                    placeholder="Pantry Picks"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full rounded-2xl bg-gray-100 px-2 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900/50 dark:focus-visible:outline-lime-400 m-2 "
                />
            </div>
            <div className="flex w-full max-w-xs flex-col gap-1 text-slate-600 dark:text-violet-100 m-2 ">
                <label className="w-fit pl-0.5 text-sm text-violet-100">Weekly Needs</label>
                <input
                    type="number"
                    min="1"
                    value={requiredQuantity}
                    onChange={(e) => setRequiredQuantity(e.target.value)}
                    className="w-full rounded-2xl bg-gray-100 px-2 py-2.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900/50 dark:focus-visible:outline-lime-400 m-2 "
                />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded text-violet-100 m-2 ">Set Weekly Needs</button>
        </form>
    );
}

export default WeeklyRequirementsForm;
