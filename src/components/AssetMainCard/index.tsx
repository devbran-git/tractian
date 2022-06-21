import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Image, Space } from 'antd';

import { AssetMainCardProps } from './types';
import { STATUS_TEXT_COLORS } from '../../constants';
import { setHealthScoreColor } from '../../helpers/healthScoreColors';

const AssetMainCard: React.FC<AssetMainCardProps> = ({ asset }) => {
  const { Text } = Typography;

  return (
    <Link className='card-container' to={`/ativo-${asset.id}`}>
      <Image className='asset-image' src={asset?.image} preview={false} />

      <Space direction='vertical'>
        <Text className='asset-title'>{asset.name}</Text>

        <div>
          <Text className='asset-label'>Status:</Text>
          <Text
            style={{
              color: STATUS_TEXT_COLORS[asset?.status],
            }}
            className='asset-data'>
            {asset?.status}
          </Text>
        </div>

        <div>
          <Text className='asset-label'>Saúde:</Text>
          <Text
            style={{
              color: setHealthScoreColor(asset?.healthscore),
            }}
            className='asset-data'>
            {asset?.healthscore}%
          </Text>
        </div>

        <Text className='access-details'>Detalhes</Text>
      </Space>
    </Link>
  );
};

export default AssetMainCard;
