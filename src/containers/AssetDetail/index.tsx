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
import AssetAssetMessage from '../../components/AssetMessage';
import PrimaryButton from '../../components/PrimaryButton';
import MaintenanceModal from '../../components/MaintenanceModal';

const AssetDetail: React.FC = () => {
  const { Text } = Typography;

  const { assetParam } = useParams();

  const assetParams = assetParam?.split('-') as string[];
  const assetId = assetParams[2];

  const [assetDetails, setAssetDetails] = useState({} as Asset);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const goBack = () => {
    const routeToBack = assetParams[0];

    if (routeToBack === 'manutencao') return '/manutencao';

    return '/';
  };

  const onAskMaintenance = () => {};

  const getAssetDetailsData = async () => {
    const assetResponse = await api.get(`assets/${assetId}`);
    const assetDetailsData = assetResponse.data;

    setAssetDetails(assetDetailsData);
  };

  useEffect(() => {
    getAssetDetailsData();
  }, []);

  return (
    <>
      <div className='details-container'>
        <div style={{ padding: '0 24px' }}>
          <Link className='back-button' to={goBack()}>
            <LeftOutlined />
            <Text style={{ paddingTop: '1.5px' }}>Voltar</Text>
          </Link>

          <AssetDetailsCard asset={assetDetails} />
        </div>

        <SpecificationsStack assetDetails={assetDetails} />

        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '0 24px 40px',
            marginTop: '16px',
          }}>
          <MonitoringDisplay assetDetails={assetDetails} />

          <AssetAssetMessage asset={assetDetails} />

          {assetDetails?.status !== 'inOperation' && (
            <PrimaryButton onClick={() => setIsModalOpen(true)} />
          )}

          {assetDetails?.status === 'inOperation' && (
            <div style={{ width: '100%', height: '48px' }} />
          )}
        </div>

        <MaintenanceModal />
      </div>
    </>
  );
};

export default AssetDetail;
