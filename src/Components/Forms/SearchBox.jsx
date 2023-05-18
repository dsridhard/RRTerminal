import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

const SearchBox = () => {
  const [value, setValue] = useState('');
  const items = [
    { label: 'apple' },
    { label: 'banana' },
    { label: 'pear' }
  ];

  return (
    <Autocomplete
      getItemValue={(item) => item.label}
      items={items}
      renderItem={(item, isHighlighted) => (
        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
          {item.label}
        </div>
      )}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSelect={(value) => setValue(value)}
    />
  );
};

export default SearchBox;
