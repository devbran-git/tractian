import './styles.css';
import React from 'react';

import { MaintenanceModalProps } from './types';
import { Typography } from 'antd';

const MaintenanceModal: React.FC<MaintenanceModalProps> = () => {
  const { Text } = Typography;

  return (
    <div className='maintenance-modal-overlay'>
      <div className='maintenance-modal-container'>
        <div className='maintenance-modal-header'>
          <Text>Solicitar manutenção</Text>
        </div>
        <div className='maintenance-modal-body'>
          <div>
            <Text>Ativo:</Text>
            <Text>motor</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceModal;
