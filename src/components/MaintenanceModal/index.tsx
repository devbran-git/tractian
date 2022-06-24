import './styles.css';
import React from 'react';

import { MaintenanceModalProps } from './types';
import { Modal, Space, Typography } from 'antd';
import { colors } from '../../styles/colors';
import CustomSelect from '../CustomSelect';

const MaintenanceModal: React.FC<MaintenanceModalProps> = ({
  asset,
  usersList,
  isModalOpen,
  handleSelectPriority,
  handleSelectResponsible,
  handleModalCancel,
  onMaintenanceRequest,
}) => {
  const { Text } = Typography;

  const priorities = ['Baixa', 'Moderada', 'Alta'];

  return (
    <Modal
      style={{ fontFamily: 'Poppins' }}
      title='Solicitar Manutenção'
      visible={isModalOpen}
      onOk={onMaintenanceRequest}
      onCancel={handleModalCancel}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Space size={4} style={{ marginBottom: '8px' }}>
          <Text
            className='maintenance-modal-label'
            style={{ color: colors.gray }}>
            Ativo:
          </Text>
          <Text className='maintenance-modal-value'>{asset?.name}</Text>
        </Space>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <CustomSelect
            optionsList={priorities}
            label='Prioridade'
            handleChange={handleSelectPriority}
          />
          <CustomSelect
            optionsList={usersList}
            label='Responsável'
            handleChange={handleSelectResponsible}
          />
        </div>
      </div>
    </Modal>
  );
};

export default MaintenanceModal;
