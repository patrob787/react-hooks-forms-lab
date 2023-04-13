import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchField, setSearchField] = useState("");
  const [itemsList, setItemsList] = useState(items);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function onSearchChange(e) {
    setSearchField(e.target.value)
  }

  function addItemToList(newItem) {
    setItemsList([...itemsList, newItem])
  };
  
  const itemsToDisplay = itemsList.filter((item) => { 
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });
  
  const searchItems = itemsToDisplay.filter((item) => {
    if (item.name.toLowerCase().includes(searchField.toLowerCase())) {
      return item
    }
  })
  
  const renderItems = searchItems.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ))
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItemToList} />
      <Filter  
        search={searchField}
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {renderItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
