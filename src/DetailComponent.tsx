import React from 'react';

interface DetailComponentProps {
  item: { id: number; title: string; description: string };
  onDeleteItem: (id: number) => void;
}

const DetailComponent: React.FC<DetailComponentProps> = ({ item, onDeleteItem }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </div>
  );
};

export default DetailComponent;
