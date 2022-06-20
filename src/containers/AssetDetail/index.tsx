import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Asset } from '../../types/asset';

const AssetDetail: React.FC = () => {
  const { assetParam } = useParams();

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
    <div
      className='details-container'
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Link to={goBack()}>
        <p>←</p>
      </Link>

      <img
        src={assetDetails?.image}
        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
        alt={assetDetails?.name}
      />

      <p>{assetDetails?.id}</p>
      <p>{assetDetails?.name}</p>
      <p>{assetDetails?.model}</p>
      <p>{assetDetails?.status}</p>
      <p>{assetDetails?.healthscore}</p>
    </div>
  );
};

export default AssetDetail;
