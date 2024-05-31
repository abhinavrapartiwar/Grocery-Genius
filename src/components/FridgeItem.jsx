import React from 'react';

function FridgeItem({ item, index, removeItem, toggleCheck, incrementQuantity, decrementQuantity }) {
    return (
        <div className="flex items-center justify-between border-b py-2">
            <div className="flex w-full max-w-xs flex-col gap-1 text-slate-600 dark:text-violet-100  m-2 ">
                <label className="inline-flex cursor-pointer items-center gap-3">
                    <input id="defaultToggle"
                        type="checkbox"
                        className="peer sr-only"
                        role="switch"
                        checked={item.checked}
                        onChange={() => toggleCheck(index)}
                    />
                    <div className="relative h-6 w-11 after:h-5 after:w-5 peer-checked:after:translate-x-5 rounded-full   bg-gray-100 after:absolute after:bottom-0 after:left-[0.0625rem] after:top-0 after:my-auto after:rounded-full after:bg-slate-600 after:transition-all after:content-[''] peer-checked:bg-orange-400 peer-checked:after:bg-slate-100 peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-orange-500 peer-focus:peer-checked:outline-orange-400 peer-active:outline-offset-0 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:border-slate-700 dark:bg-gray-900 dark:after:bg-violet-100 dark:peer-checked:bg-green-500 dark:peer-checked:after:bg-black dark:peer-focus:outline-purple-600 dark:peer-focus:peer-checked:outline-lime-400 m-2 " aria-hidden="true"></div>
                </label>
                <span className={`mr-2 ${item.checked ? 'line-through' : ''}`}>{item.name} (x{item.quantity})</span>
                <span className="w-fit pl-0.5 text-sm">Expires on: {item.expiryDate}</span>
            </div>
            <div className="flex items-center">
                <button onClick={() => decrementQuantity(index)} aria-label="create something epic" type="button" className="cursor-pointer inline-flex justify-center items-center aspect-square whitespace-nowrap rounded-full bg-orange-400 p-3 text-xs font-medium tracking-wide text-slate-100 transition hover:opacity-75 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-red-400 dark:text-black dark:focus-visible:outline-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="size-4 fill-slate-100 dark:fill-black">
                        <path fillRule="evenodd" d="M19 12H5"></path>
                    </svg>
                </button>
                <button onClick={() => incrementQuantity(index)} aria-label="create something epic" type="button" className="cursor-pointer inline-flex justify-center items-center aspect-square whitespace-nowrap rounded-full bg-orange-400 p-3 text-xs font-medium tracking-wide text-slate-100 transition hover:opacity-75 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-lime-400 dark:text-black dark:focus-visible:outline-lime-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="size-4 fill-slate-100 dark:fill-black">
                        <path fillRule="evenodd" d="M19 12H5"></path>
                    </svg>
                </button>
                <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2 m-2 "
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default FridgeItem;
