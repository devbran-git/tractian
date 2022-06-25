import './styles.css';
import React from 'react';
import { Space, Typography } from 'antd';

import { STATUS_COLORS, STATUS_MESSAGE, STATUS_ICONS } from '../../constants';

import { AssetMessageProps } from './types';

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
