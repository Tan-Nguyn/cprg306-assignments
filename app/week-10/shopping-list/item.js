export default function Item({ item, onSelect }) {
  return (
    <li
      className="p-4 mb-2 bg-gray-800 text-white rounded shadow cursor-pointer"
      onClick={() => onSelect(item)}
    >
      <div className="text-lg font-semibold">{item.name}</div>
      <div className="text-sm">Buy {item.quantity} in {item.category}</div>
    </li>
  );
}
