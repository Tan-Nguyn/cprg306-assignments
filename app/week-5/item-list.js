// /app/week-5/item-list.js

'use client';

import { useState, useEffect } from 'react';
import Item from './item';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    fetch('/week-5/items.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setItemsData(data);
      })
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  const groupedItems = itemsData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-4">
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
                <Item key={item.id} item={item} />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
