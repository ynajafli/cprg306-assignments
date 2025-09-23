export default function Item(props) {
  let { name, quantity, category } = props;

  return(
    <div>
        <ul>
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </ul>
    </div>
  );
}
