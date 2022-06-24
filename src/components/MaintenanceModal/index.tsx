import './styles.css';
import React, { useState } from 'react';

import { MaintenanceModalProps } from './types';
import { Modal, Typography } from 'antd';

const MaintenanceModal: React.FC<MaintenanceModalProps> = ({
  asset,
  isModalOpen,
  handleModalCancel,
  onMaintenanceRequest,
}) => {
  const { Text } = Typography;

  return (
    <Modal
      title='Basic Modal'
      visible={isModalOpen}
      onOk={onMaintenanceRequest}
      onCancel={handleModalCancel}>
      <Text>Some contents...</Text>
      <Text>Some contents...</Text>
      <Text>Some contents...</Text>
    </Modal>
  );
};

export default MaintenanceModal;
