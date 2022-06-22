import './styles.css';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';

import AssetDetailsCard from '../../components/AssetDetailsCard';
import SpecificationsStack from '../../components/SpecificationsStack';
import MonitoringDisplay from '../../components/MonitoringDisplay';

import { api } from '../../services/api';

import { Asset } from '../../types/asset';

const AssetDetail: React.FC = () => {
  const { assetParam } = useParams();

  const assetParams = assetParam?.split('-') as string[];
  const assetId = assetParams[2];

  const { Text } = Typography;

  const [assetDetails, setAssetDetails] = useState({} as Asset);

  const goBack = () => {
    const routeToBack = assetParams[0];

    if (routeToBack === 'manutencao') return '/manutencao';

    return '/';
  };

  const getAssetDetailsData = async () => {
    const assetResponse = await api.get(`assets/${assetId}`);
    const assetDetailsData = assetResponse.data;

    setAssetDetails(assetDetailsData);
  };

  useEffect(() => {
    getAssetDetailsData();
  }, []);

  return (
    <div className='details-container'>
      <div style={{ padding: '0 24px' }}>
        <Link className='back-button' to={goBack()}>
          <LeftOutlined />
          <Text style={{ paddingTop: '1.5px' }}>Voltar</Text>
        </Link>

        <AssetDetailsCard asset={assetDetails} />
      </div>

      <SpecificationsStack assetDetails={assetDetails} />

      <div style={{ padding: '0 24px', marginTop: '16px' }}>
        <MonitoringDisplay assetDetails={assetDetails} />
      </div>
    </div>
  );
};

export default AssetDetail;
