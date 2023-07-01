import "./styles.css";

import FilterableProductTable from "./components/FilterableProductTable";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$2", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$3", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$3", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Peas" }
];

export default function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}
