import React from 'react';

interface ListComponentProps {
  items: { id: number; title: string; description: string }[];
  onSelectItem: (id: number) => void;
}

const ListComponent: React.FC<ListComponentProps> = ({ items, onSelectItem }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onSelectItem(item.id)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
