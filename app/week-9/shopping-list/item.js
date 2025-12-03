export default function Item({ name, quantity, category, onSelect }) {
  
  let styling = "border rounded-lg shadow-sm p-4 bg-white flex flex-col";

  return (
    <div className={styling} onClick={onSelect}>
      <ul>
        <li>{name}</li>
        <li>{quantity}</li>
        <li>{category}</li>
      </ul>
    </div>
  );
}
