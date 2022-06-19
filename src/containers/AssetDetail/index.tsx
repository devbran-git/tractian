import { Link, useParams } from 'react-router-dom';

const AssetDetail: React.FC = () => {
  const { assetParam } = useParams();

  const assetParams = assetParam?.split('-') as string[];

  const assetId = assetParams[1];

  const goBack = () => {
    const routeToBack = assetParams[0];

    if (routeToBack === 'manutencao') return '/manutencao';

    return '/';
  };

  return (
    <div className='details-container'>
      <Link to={goBack()}>
        <p>{`Detalhes do asset ${assetId}`}</p>
      </Link>
    </div>
  );
};

export default AssetDetail;
