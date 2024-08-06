'use client';

import { useState } from 'react';
import Item from '../shopping-list/item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="w-full mt-4">
      <div className="mb-4 flex">
        <button
          onClick={() => setSortBy('name')}
          className={`p-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-2 mr-2 ${sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`p-2 ${sortBy === 'grouped' ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'grouped' ? (
        Object.keys(groupedItems).sort().map(category => (
          <div key={category}>
            <h2 className="text-2xl font-bold text-white mb-2 capitalize">{category}</h2>
            <ul>
              {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                <Item key={item.id} item={item} onSelect={onItemSelect} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map(item => (
            <Item key={item.id} item={item} onSelect={onItemSelect} />
          ))}
        </ul>
      )}
    </div>
  );
}
