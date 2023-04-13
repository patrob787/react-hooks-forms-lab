import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchField, setSearchField] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    setSearchField(e.target.value)
  }

  function renderItems(itemArray) {
    return itemArray.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ))
  }

  const searchItems = items.filter((item) => {
    if (item.name.toLowerCase().includes(searchField.toLowerCase())) {
      return item
    }
  })
  
  const itemsToDisplay = items.filter((item) => { 
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter  
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {searchField ? renderItems(searchItems) : renderItems(itemsToDisplay)}
      </ul>
    </div>
  );
}

export default ShoppingList;
