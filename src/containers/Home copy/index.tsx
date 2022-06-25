import { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../components/Layout';
import AssetMainCard from '../../components/AssetMainCard';
import { LoadingOutlined } from '@ant-design/icons';

import { Asset } from '../../types/asset';

import { useAssets } from '../../hooks/assets';

const Home = () => {
  const { units, assets, selectedUnit, isLoading, setSelectedUnit } =
    useAssets();

  const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);

  const onFilterAssetsToShow = useMemo(() => {
    const initialAssetsList = assets?.filter(
      (asset) => asset.unitId === selectedUnit
    );

    setAssetsToShow(initialAssetsList);
  }, [selectedUnit]);

  return (
    <Layout
      headerTitle='Unidades'
      isLoading={isLoading}
      units={units}
      selectedUnit={selectedUnit}
      setSelectedUnit={setSelectedUnit}>
      <div className='content'>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          assetsToShow?.map((asset, index) => (
            <AssetMainCard
              key={index}
              asset={asset}
              selectedUnit={selectedUnit}
              paramPrefix='ativo'
            />
          ))
        )}
      </div>

      <Outlet />
    </Layout>
  );
};

export default Home;
