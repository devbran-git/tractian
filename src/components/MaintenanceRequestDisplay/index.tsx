import './styles.css';
import React from 'react';

import { Space, Typography } from 'antd';

import { colors } from '../../styles/colors';

import { MaintenanceRequestDisplayProps } from './types';

const MaintenanceRequestDisplay: React.FC<MaintenanceRequestDisplayProps> = ({
  requestData,
}) => {
  const { Text } = Typography;

  return (
    <Space direction='vertical' size={0}>
      <Text className='monitoring-title'>Ordem de serviço emitida:</Text>

      <Space
        size={0}
        direction='vertical'
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className='maintenance-request-display-wrapper'>
        <Space size={4}>
          <Text
            style={{ color: colors.gray }}
            className='maintenance-request-label'>
            Prioridade:
          </Text>
          <Text className='maintenance-request-value'>
            {requestData.priority}
          </Text>
        </Space>

        <Space size={4}>
          <Text
            style={{ color: colors.gray }}
            className='maintenance-request-label'>
            Código:
          </Text>
          <Text className='maintenance-request-value'>{requestData.code}</Text>
        </Space>

        <Space size={4}>
          <Text
            style={{ color: colors.gray }}
            className='maintenance-request-label'>
            Data da solicitação:
          </Text>
          <Text className='maintenance-request-value'>
            {requestData.createdAt}
          </Text>
        </Space>

        <Space size={4}>
          <Text
            style={{ color: colors.gray }}
            className='maintenance-request-label'>
            Responsável:
          </Text>
          <Text className='maintenance-request-value'>
            {requestData.responsible}
          </Text>
        </Space>

        <Space size={4}>
          <Text
            style={{ color: colors.gray }}
            className='maintenance-request-label'>
            Contato:
          </Text>
          <Text className='maintenance-request-value'>
            {requestData.contact}
          </Text>
        </Space>
      </Space>
    </Space>
  );
};

export default MaintenanceRequestDisplay;
