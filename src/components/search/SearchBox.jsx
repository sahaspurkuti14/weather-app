import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

function SearchBox(props) {
  // react select styling 
  const inputStyle = {
    control: (styles) => ({ ...styles, backgroundColor: 'white', width: '300px', height: '43px' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? '#0033cc'
            : isFocused
              ? 'lightgray'
              : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? 'white'
            : 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : 'blue'
            : undefined,
        },
        cursor: 'pointer'
      };
    },
  };

  const options = [
    { value: 'kathmandu', label: 'Kathmandu' },
    { value: 'berlin', label: 'Berlin' },
    { value: 'chitwan', label: 'Chitwan' }
  ]

  return (
     <div className="search-card">
      <h3 className="card-title">Find the Weather</h3>
      <div className="form">
        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder="Search by city..."
          onChange={(value) => props.setCity(value)}
          isClearable={true}
          name={'search-field'}
          options={options}
          styles={inputStyle}
        />
      </div>
    </div>

  )
}

export default React.memo(SearchBox);
