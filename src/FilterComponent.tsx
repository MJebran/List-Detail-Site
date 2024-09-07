import React, { useState } from 'react';

interface FilterComponentProps {
  onFilter: (filterText: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter }) => {
  const [filterText, setFilterText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setFilterText(text);
    onFilter(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterComponent;
