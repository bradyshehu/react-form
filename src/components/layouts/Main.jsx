import { useState } from "react";

export default function Main() {
  const [shoppingList, setShoppingList] = useState([
    "Pane",
    "Pasta",
    "Biscotti",
    "Latte",
  ]);

  const [newShoppingItem, setNewShoppingItem] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newShoppingList = [...shoppingList, newShoppingItem];
    setShoppingList(newShoppingList);
    setNewShoppingItem("");
  };

  return (
    <main>
      <div className="container">
        <form onSubmit={handleFormSubmit} className="dflex gap-2">
          <input
            type="text"
            className="form-control"
            value={newShoppingItem}
            onChange={(event) => setNewShoppingItem(event.target.value)}
          />
        </form>
        <ul>
          {shoppingList.map((shoppingItem, index) => (
            <li key={index}>{shoppingItem}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
