import './styles.css';
import React from 'react';

import { LinedSwitchProps } from './types';

const LinedSwitch: React.FC<LinedSwitchProps> = ({
  units,
  selectedUnit,
  setSelectedUnit,
}) => {
  return (
    <div className='lined-switch'>
      {units.map((unit, index) => (
        <div style={{ position: 'relative', height: '28px' }} key={index}>
          <p
            className={
              selectedUnit === index + 1
                ? 'active-label label'
                : 'inactive-label label'
            }
            onClick={() => setSelectedUnit(index + 1)}>
            {unit?.name}
          </p>
          <div
            className={
              selectedUnit === index + 1
                ? 'active-line line'
                : 'inactive-line line'
            }
          />
        </div>
      ))}
    </div>
  );
};

export default LinedSwitch;
