import './styles.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Asset } from '../../types/asset';
import { LeftOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import AssetDetailsCard from '../../components/AssetDetailsCard';

const AssetDetail: React.FC = () => {
  const { assetParam } = useParams();

  const { Text } = Typography;

  const [assetDetails, setAssetDetails] = useState({} as Asset);

  const assetParams = assetParam?.split('-') as string[];
  const assetId = assetParams[1];

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
    </div>
  );
};

export default AssetDetail;
