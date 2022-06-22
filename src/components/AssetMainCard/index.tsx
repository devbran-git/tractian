import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Image, Space } from 'antd';

import { STATUS_COLORS, STATUS_VALUES } from '../../constants';
import { setHealthScoreColor } from '../../helpers/healthScoreColors';

import { AssetMainCardProps } from './types';

const AssetMainCard: React.FC<AssetMainCardProps> = ({
  asset,
  selectedUnit,
  paramPrefix,
}) => {
  const { Text } = Typography;

  const routeURL = `/${paramPrefix}-${selectedUnit}-${asset.id}`;

  return (
    <Link className='card-container' to={routeURL}>
      <Image className='asset-image' src={asset?.image} preview={false} />

      <Space direction='vertical'>
        <Text className='asset-title'>{asset.name}</Text>

        <div>
          <Text className='asset-label'>Status:</Text>
          <Text
            style={{
              color: STATUS_COLORS[asset?.status],
            }}
            className='asset-data'>
            {STATUS_VALUES[asset?.status]}
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
