import './styles.css';
import React, { useState } from 'react';

import { MaintenanceModalProps } from './types';
import { Typography } from 'antd';
import CustomSelect from '../CustomSelect';

const MaintenanceModal: React.FC<MaintenanceModalProps> = ({ asset }) => {
  const { Text } = Typography;

  const [selectedUrgency, setSelectedUrgency] = useState('Selecione');
  const [selectedResponsible, setSelectedResponsible] = useState('Selecione');
  const [isUrgencySelectActive, setIsUrgencySelectActive] = useState(false);
  const [isResponsibleSelectActive, setIsResponsibleSelectActive] =
    useState(false);

  const optsUrgency = [
    { id: '1', name: 'Branda' },
    { id: '2', name: 'Moderada' },
    { id: '3', name: 'Máxima' },
  ];

  const optsResponsible = [
    { id: '1', name: 'Manel' },
    { id: '2', name: 'Pondé' },
    { id: '3', name: 'Tite' },
  ];

  const handleSelectUrgency = () =>
    setIsUrgencySelectActive(!isUrgencySelectActive);

  const handleSelectResponsible = () =>
    setIsResponsibleSelectActive(!isResponsibleSelectActive);

  const handleUrgencyOptions = (opt: string) => {
    setSelectedUrgency(opt);
    setIsUrgencySelectActive(false);
  };
  const handleResponsibleOptions = (opt: string) => {
    setSelectedResponsible(opt);
    setIsResponsibleSelectActive(false);
  };

  return (
    <div className='maintenance-modal-overlay'>
      <div className='maintenance-modal-container'>
        <div className='maintenance-modal-header'>
          <Text>Solicitar manutenção</Text>
        </div>
        <div className='maintenance-modal-body'>
          <div>
            <Text className='maintenance-modal-label'>Ativo:</Text>
            <Text className='maintenance-modal-value'>{asset?.name}</Text>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Text className='maintenance-modal-label'>Urgência:</Text>
              <CustomSelect
                options={optsUrgency}
                selectedOption={selectedUrgency}
                isSelectActive={isUrgencySelectActive}
                handleOptions={handleUrgencyOptions}
                handleSelect={handleSelectUrgency}
              />
            </div>

            <div>
              <Text className='maintenance-modal-label'>Responsável:</Text>
              <CustomSelect
                options={optsResponsible}
                selectedOption={selectedResponsible}
                isSelectActive={isResponsibleSelectActive}
                handleOptions={handleResponsibleOptions}
                handleSelect={handleSelectResponsible}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceModal;
