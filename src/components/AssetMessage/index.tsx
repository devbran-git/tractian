import './styles.css';
import { Space, Typography } from 'antd';
import React from 'react';
import { AssetMessageProps } from './types';
import { STATUS_COLORS, STATUS_MESSAGE, STATUS_ICONS } from '../../constants';

const AssetMessage: React.FC<AssetMessageProps> = ({ asset }) => {
  const { Text } = Typography;

  return (
    <Space size={0} className='asset-message-container'>
      {STATUS_ICONS[asset?.status]}

      <Text
        style={{
          color: STATUS_COLORS[asset?.status],
          fontSize: '12px',
        }}>
        {STATUS_MESSAGE[asset?.status]}
      </Text>
    </Space>
  );
};

export default AssetMessage;
