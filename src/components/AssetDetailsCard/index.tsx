import './styles.css';
import React from 'react';
import { Image, Space, Typography } from 'antd';

import { ASSET_MODELS, STATUS_COLORS, STATUS_VALUES } from '../../constants';

import { AssetDetailsCardProps } from './types';

const AssetDetailsCard: React.FC<AssetDetailsCardProps> = ({ asset }) => {
  const { Text } = Typography;

  return (
    <Space className='details-card-container'>
      <Image
        className='details-asset-image'
        src={asset?.image}
        preview={false}
      />

      <Space direction='vertical'>
        <Text className='details-asset-title'>{asset.name}</Text>

        <div>
          <Text className='details-asset-label'>Modelo:</Text>
          <Text className='details-asset-data'>
            {ASSET_MODELS[asset?.model]}
          </Text>
        </div>

        <div>
          <Text className='details-asset-label'>Status:</Text>
          <Text
            style={{
              color: STATUS_COLORS[asset?.status],
            }}
            className='details-asset-data'>
            {STATUS_VALUES[asset?.status]}
          </Text>
        </div>
      </Space>

      <div
        className='details-status-tag'
        style={{ backgroundColor: STATUS_COLORS[asset?.status] }}
      />
    </Space>
  );
};

export default AssetDetailsCard;
