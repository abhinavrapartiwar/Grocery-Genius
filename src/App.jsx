import { useState } from 'react';
import FridgeItem from './components/FridgeItem';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';
import WeeklyRequirementsForm from './components/WeeklyRequirementsForm';
import WeeklyRequirements from './components/WeeklyRequirements';

function App() {
  const [fridgeItems, setFridgeItems] = useState([]);
  const [weeklyRequirements, setWeeklyRequirements] = useState({});
  const [warning, setWarning] = useState('');

  const addItem = (name, expiryDate, quantity) => {
    if (!expiryDate) {
      setWarning('Please enter an expiry date for the item.');
      return;
    }
    setWarning('');
    setFridgeItems([...fridgeItems, { name, expiryDate, quantity: parseInt(quantity, 10), checked: false }]);
  };

  const removeItem = (index) => {
    const newItems = [...fridgeItems];
    newItems.splice(index, 1);
    setFridgeItems(newItems);
  };

  const toggleCheck = (index) => {
    const newItems = [...fridgeItems];
    newItems[index].checked = !newItems[index].checked;
    setFridgeItems(newItems);
  };

  const incrementQuantity = (index) => {
    const newItems = [...fridgeItems];
    newItems[index].quantity += 1;
    setFridgeItems(newItems);
  };

  const decrementQuantity = (index) => {
    const newItems = [...fridgeItems];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
    } else {
      removeItem(index);
    }
    setFridgeItems(newItems);
  };

  const updateWeeklyRequirements = (name, requiredQuantity) => {
    setWeeklyRequirements({ ...weeklyRequirements, [name]: parseInt(requiredQuantity, 10) });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-1 text-center text-violet-100">Welcome to Grocery Genius</h1>
      <h1 className="text-2xl font-bold mb-8 text-center text-violet-300">Your Smart Food Management Solution</h1>
      {warning && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Warning: </strong>
          <span className="block sm:inline">{warning}</span>
        </div>
      )}
      <AddItemForm addItem={addItem} />
      <WeeklyRequirementsForm updateWeeklyRequirements={updateWeeklyRequirements} />
      <WeeklyRequirements fridgeItems={fridgeItems} weeklyRequirements={weeklyRequirements} />
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-violet-100 m-2 ">Grocery Stocks</h2>
        {fridgeItems.map((item, index) => (
          <FridgeItem
            key={index}
            index={index}
            item={item}
            removeItem={removeItem}
            toggleCheck={toggleCheck}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))}
      </div>
      <ShoppingList fridgeItems={fridgeItems} weeklyRequirements={weeklyRequirements} />
    </div>
  );
}

export default App;