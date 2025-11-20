export default function Item(props) {
  let { name, quantity, category } = props;

  let styling = "border rounded-lg shadow-sm p-4 bg-white flex flex-col"
  return(
    <div className={styling}>
        <ul>
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
    </div>
  );
}
