import './styles.css';
import React, { useEffect, useState } from 'react';
import { Space, Typography } from 'antd';

import { colors } from '../../styles/colors';

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
    <Space direction='vertical'>
      <Text className='monitoring-title'>Monitoramento</Text>

      <Space
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className='display-wrapper'>
        <Space
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
          <Space
            size={4}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ color: colors.gray }} className='monitoring-label'>
              Sensor:
            </Text>
            <Text className='monitoring-value'>{sensor}</Text>
          </Space>

          <Space
            size={4}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ color: colors.gray }} className='monitoring-label'>
              Coletas:
            </Text>
            <Text className='monitoring-value'>
              {assetDetails?.metrics?.totalCollectsUptime}
            </Text>
          </Space>
        </Space>

        <Space
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
          <Space
            size={4}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ color: colors.gray }} className='monitoring-label'>
              Horas em coleta:
            </Text>
            <Text className='monitoring-value'>{totalUptime}</Text>
          </Space>

          <Space
            size={4}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ color: colors.gray }} className='monitoring-label'>
              ??ltima coleta:
            </Text>
            <Text className='monitoring-value'>{lastUptimeDate}</Text>
          </Space>
        </Space>
      </Space>
    </Space>
  );
};

export default MonitoringDisplay;
