import './styles.css';
import { Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { MonitoringDisplayProps } from './types';

const MonitoringDisplay: React.FC<MonitoringDisplayProps> = ({
  assetDetails,
}) => {
  const { Text } = Typography;

  const [sensor, setSensor] = useState('');
  const [lastUptimeDate, setLastUptimeDate] = useState('');

  const totalUptime = assetDetails?.metrics?.totalUptime.toFixed();

  useEffect(() => {
    if (!!assetDetails?.sensors) {
      setSensor(assetDetails?.sensors[0]);

      const date = new Date(assetDetails?.metrics?.lastUptimeAt);
      const lastUptime = new Intl.DateTimeFormat('pt-BR').format(date);

      setLastUptimeDate(lastUptime);
    }
  }, [assetDetails]);

  return (
    <Space>
      <Text className='monitoring-title'>Monitoramento</Text>

      <Space className='display-wrapper'>
        <Space className='labels-container'>
          <Space className='display-labels'>
            <Text className='monitoring-label'>Sensor:</Text>
            <Text className='monitoring-value'>{sensor}</Text>
          </Space>

          <Space className='display-labels'>
            <Text className='monitoring-label'>Coletas:</Text>
            <Text className='monitoring-value'>
              {assetDetails?.metrics?.totalCollectsUptime}
            </Text>
          </Space>
        </Space>

        <Space className='labels-container'>
          <Space className='display-labels'>
            <Text className='monitoring-label'>Horas em coleta:</Text>
            <Text className='monitoring-value'>{totalUptime}</Text>
          </Space>

          <Space className='display-labels'>
            <Text className='monitoring-label'>Última coleta:</Text>
            <Text className='monitoring-value'>{lastUptimeDate}</Text>
          </Space>
        </Space>
      </Space>
    </Space>
  );
};

export default MonitoringDisplay;
