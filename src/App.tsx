import React, { useState } from "react";
import AddNewItemComponent from "./AddNewItemComponent";
import DetailComponent from "./DetailComponent";
import FilterComponent from "./FilterComponent";
import ListComponent from "./ListComponent";

interface Item {
  id: number;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, title: "Item 1", description: "This is item 1" },
    { id: 2, title: "Item 2", description: "This is item 2" },
    { id: 3, title: "Item 3", description: "This is item 3" },
  ]);

  const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleFilter = (filterText: string) => {
    if (filterText) {
      const filtered = items.filter((item) =>
        item.title.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  };

  const handleSelectItem = (id: number) => {
    const item = items.find((item) => item.id === id);
    setSelectedItem(item || null);
  };

  const handleDeleteItem = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setFilteredItems(updatedItems);
    setSelectedItem(null);
  };

  const handleAddNewItem = (newItem: Item) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setFilteredItems(updatedItems);
  };

  return (
    <div>
      <h1>Item Management</h1>
      <FilterComponent onFilter={handleFilter} />
      <ListComponent items={filteredItems} onSelectItem={handleSelectItem} />
      {selectedItem && (
        <DetailComponent item={selectedItem} onDeleteItem={handleDeleteItem} />
      )}
      <AddNewItemComponent onAddNewItem={handleAddNewItem} />
    </div>
  );
};

export default App;
