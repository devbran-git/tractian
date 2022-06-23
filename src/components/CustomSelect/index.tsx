import React from 'react';

import { CustomSelectProps } from './types';

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  selectedOption,
  isSelectActive,
  handleOptions,
  handleSelect,
}) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '24px',
          border: 'solid 0.5px #DDD',
        }}>
        <p>{selectedOption}</p>
        <p onClick={handleSelect}>↓</p>
      </div>
      {isSelectActive && (
        <div
          style={{
            width: '100%',
            border: 'solid 0.5px #DDD',
            borderTop: 'none',
          }}>
          {options?.map((option, index) => (
            <div key={index} onClick={() => handleOptions(option.name)}>
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
