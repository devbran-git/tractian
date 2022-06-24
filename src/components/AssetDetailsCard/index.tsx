import './styles.css';
import React from 'react';
import { Image, Space, Typography } from 'antd';

import { ASSET_MODELS, STATUS_COLORS, STATUS_VALUES } from '../../constants';

import { AssetDetailsCardProps } from './types';
import { colors } from '../../styles/colors';

const AssetDetailsCard: React.FC<AssetDetailsCardProps> = ({ asset }) => {
  const { Text } = Typography;

  return (
    <Space size={0} className='details-card-container'>
      <Image
        style={{ width: '80px', height: '80px' }}
        className='details-asset-image'
        src={asset?.image}
        preview={false}
      />

      <Space size={0} direction='vertical'>
        <Text className='details-asset-title'>{asset.name}</Text>

        <div>
          <Text style={{ color: colors.gray }} className='details-asset-label'>
            Modelo:
          </Text>
          <Text className='details-asset-data'>
            {ASSET_MODELS[asset?.model]}
          </Text>
        </div>

        <div>
          <Text style={{ color: colors.gray }} className='details-asset-label'>
            Status:
          </Text>
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
