

export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <li className="p-2 border-b border-gray-200">
      <span className="font-semibold">{name}</span> - {quantity} ({category})
    </li>
  );
}