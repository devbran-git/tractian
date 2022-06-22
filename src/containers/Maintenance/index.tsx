import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AxiosResponse } from 'axios';

import Layout from '../../components/Layout';
import AssetMainCard from '../../components/AssetMainCard';

import { api } from '../../services/api';
import { Asset } from '../../types/asset';
import { Unit } from '../../types/unit';

const Maintenance = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);
  const [selectedUnit, setSelectedUnit] = useState(1);

  const getUnitsData = async () => {
    let response = await api.get('units');

    setUnits(response?.data);
  };

  const getToMaintenanceAssetsData = async () => {
    const response: AxiosResponse<Asset[]> = await api.get('assets');

    const totalAssets = response?.data;

    const toMaintenanceAssets = totalAssets.filter(
      (toMaintenance) =>
        toMaintenance.status === 'inDowntime' ||
        toMaintenance.status === 'inAlert'
    );

    const unitAssets = toMaintenanceAssets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    setAssets(toMaintenanceAssets);
    setAssetsToShow(unitAssets);
  };

  const onSelectUnit = () => {
    const newAssetsList = assets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    setAssetsToShow(newAssetsList);
  };

  useEffect(() => {
    getUnitsData();
    getToMaintenanceAssetsData();
  }, []);

  useEffect(() => {
    onSelectUnit();
  }, [selectedUnit]);

  return (
    <Layout
      headerTitle='Manutenção'
      units={units}
      selectedUnit={selectedUnit}
      setSelectedUnit={setSelectedUnit}>
      <div className='content'>
        {assetsToShow?.map((asset, index) => (
          <AssetMainCard
            key={index}
            asset={asset}
            selectedUnit={selectedUnit}
            paramPrefix='manutencao'
          />
        ))}
      </div>

      <Outlet />
    </Layout>
  );
};

export default Maintenance;
