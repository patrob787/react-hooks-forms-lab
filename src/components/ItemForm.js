import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onSubmitForm }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce")

  function handleName(e) {
    setName(e.target.value)
    console.log(name)
  }

  function handleCategory(e) {
    setCategory(e.target.value)
    console.log(category)
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: name,
      category: category
    }
    onSubmitForm(newItem);
  }
  
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleName} type="text" name="name" value={name} />
      </label>

      <label>
        Category:
        <select onChange={handleCategory} name="category" value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
