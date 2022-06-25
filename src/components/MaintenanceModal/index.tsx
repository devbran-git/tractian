import './styles.css';
import React from 'react';
import { Modal, Space, Typography } from 'antd';

import CustomSelect from '../CustomSelect';
import { colors } from '../../styles/colors';

import { MaintenanceModalProps } from './types';

const MaintenanceModal: React.FC<MaintenanceModalProps> = ({
  asset,
  usersList,
  isModalOpen,
  errorMessage,
  handleSelectPriority,
  handleSelectResponsible,
  onMaintenanceRequest,
  handleModalCancel,
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
            size={100}
            label='Prioridade'
            optionsList={priorities}
            handleChange={handleSelectPriority}
          />
          <CustomSelect
            size={140}
            label='Responsável'
            optionsList={usersList}
            handleChange={handleSelectResponsible}
          />
        </div>

        <Text
          style={{ color: colors.alert, fontSize: '12px', marginTop: '8px' }}>
          {errorMessage}
        </Text>
      </div>
    </Modal>
  );
};

export default MaintenanceModal;
