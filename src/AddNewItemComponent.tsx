import React, { useState } from 'react';

interface AddNewItemComponentProps {
  onAddNewItem: (newItem: { id: number; title: string; description: string }) => void;
}

const AddNewItemComponent: React.FC<AddNewItemComponentProps> = ({ onAddNewItem }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title,
      description,
    };
    onAddNewItem(newItem);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddNewItemComponent;
