import './styles.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Asset } from '../../types/asset';
import { LeftOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import AssetDetailsCard from '../../components/AssetDetailsCard';
import SpecificationCard from '../../components/SpecificationCard';
import HealthIcon from '../../components/CustomIcons/HealthIcon';
import RpmIconIcon from '../../components/CustomIcons/RpmIcon';
import TemperatureIcon from '../../components/CustomIcons/TemperatureIcon';
import PowerIcon from '../../components/CustomIcons/PowerIcon';

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
          <SpecificationCard
            text={`${assetDetails?.specifications?.maxTemp}ºC`}>
            <TemperatureIcon />
          </SpecificationCard>
        ) : null}

        {assetDetails?.specifications?.rpm ? (
          <SpecificationCard text={`${assetDetails?.specifications?.rpm} rpm`}>
            <RpmIconIcon />
          </SpecificationCard>
        ) : null}
      </Space>
    </div>
  );
};

export default AssetDetail;
