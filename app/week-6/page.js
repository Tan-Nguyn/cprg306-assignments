'use client';

import { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="p-4 bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping List</h1>
      <div className="w-full max-w-md">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
