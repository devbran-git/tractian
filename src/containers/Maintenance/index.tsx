import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../components/Layout';
import AssetMainCard from '../../components/AssetMainCard';

import { Asset } from '../../types/asset';
import { useAssets } from '../../hooks/assets';
import { LoadingOutlined } from '@ant-design/icons';

const Maintenance = () => {
  const { units, assets, isLoading, selectedUnit, setSelectedUnit } =
    useAssets();

  const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);

  const onFilterAssetsToShow = () => {
    const toMaintenanceAssets = assets?.filter(
      (toMaintenance) =>
        toMaintenance.status === 'inDowntime' ||
        toMaintenance.status === 'inAlert'
    );

    const unitAssets = toMaintenanceAssets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    setAssetsToShow(unitAssets);
  };

  useEffect(() => {
    onFilterAssetsToShow();
  }, [selectedUnit]);

  useEffect(() => {
    onFilterAssetsToShow();
  }, []);

  return (
    <Layout
      headerTitle='Manutenção'
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
              paramPrefix='manutencao'
            />
          ))
        )}
      </div>

      <Outlet />
    </Layout>
  );
};

export default Maintenance;
