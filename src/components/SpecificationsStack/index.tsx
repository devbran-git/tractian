import './styles.css';
import React from 'react';

import { Space, Typography } from 'antd';
import SpecificationCard from '../SpecificationCard';
import HealthIcon from '../CustomIcons/HealthIcon';
import RpmIconIcon from '../CustomIcons/RpmIcon';
import TemperatureIcon from '../CustomIcons/TemperatureIcon';
import PowerIcon from '../CustomIcons/PowerIcon';
import { SpecificationsStackProps } from './types';

const SpecificationsStack: React.FC<SpecificationsStackProps> = ({
  assetDetails,
}) => {
  const { Text } = Typography;

  return (
    <Space className='specifications-stack' size={12}>
      <SpecificationCard text={`${assetDetails?.healthscore}%`}>
        <HealthIcon />
      </SpecificationCard>

      {assetDetails?.specifications?.power ? (
        <SpecificationCard text={`${assetDetails?.specifications?.power}KWh`}>
          <PowerIcon />
        </SpecificationCard>
      ) : null}

      {assetDetails?.specifications?.maxTemp ? (
        <SpecificationCard text={`${assetDetails?.specifications?.maxTemp}ºC`}>
          <TemperatureIcon />
        </SpecificationCard>
      ) : null}

      {assetDetails?.specifications?.rpm ? (
        <SpecificationCard text={`${assetDetails?.specifications?.rpm} rpm`}>
          <RpmIconIcon />
        </SpecificationCard>
      ) : null}
    </Space>
  );
};

export default SpecificationsStack;
