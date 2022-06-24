import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Image, Space } from 'antd';

import { STATUS_COLORS, STATUS_VALUES } from '../../constants';
import { setHealthScoreColor } from '../../helpers/healthScoreColors';

import { AssetMainCardProps } from './types';
import { colors } from '../../styles/colors';

const AssetMainCard: React.FC<AssetMainCardProps> = ({
  asset,
  selectedUnit,
  paramPrefix,
}) => {
  const { Text } = Typography;

  const routeURL = `/${paramPrefix}-${selectedUnit}-${asset.id}`;

  return (
    <Link className='card-container' to={routeURL}>
      <Image
        className='asset-image'
        style={{ width: '64px', height: '64px' }}
        src={asset?.image}
        preview={false}
      />

      <Space size={0} direction='vertical'>
        <Text className='asset-title'>{asset.name}</Text>

        <div>
          <Text style={{ color: colors.gray }} className='asset-label'>
            Status:
          </Text>
          <Text
            style={{
              color: STATUS_COLORS[asset?.status],
            }}
            className='asset-data'>
            {STATUS_VALUES[asset?.status]}
          </Text>
        </div>

        <div>
          <Text style={{ color: colors.gray }} className='asset-label'>
            Saúde:
          </Text>
          <Text
            style={{
              color: setHealthScoreColor(asset?.healthscore),
            }}
            className='asset-data'>
            {asset?.healthscore}%
          </Text>
        </div>

        <Text style={{ color: colors.gray }} className='access-details'>
          Detalhes
        </Text>
      </Space>
    </Link>
  );
};

export default AssetMainCard;
