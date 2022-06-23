import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AxiosResponse } from 'axios';

import Layout from '../../components/Layout';
import AssetMainCard from '../../components/AssetMainCard';

import { api } from '../../services/api';

import { Asset } from '../../types/asset';
import { Unit } from '../../types/unit';
import MaintenanceModal from '../../components/MaintenanceModal';

const Home = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);
  const [selectedUnit, setSelectedUnit] = useState(1);

  const getUnitsData = async () => {
    const unitResponse = await api.get('units');

    setUnits(unitResponse?.data);
  };

  const getAssetsData = async () => {
    const assetsResponse: AxiosResponse<Asset[]> = await api.get('assets');

    const totalAssets = assetsResponse?.data;

    const initialAssetsList = totalAssets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    setAssets(totalAssets);
    setAssetsToShow(initialAssetsList);
  };

  const onSelectUnit = () => {
    const newAssetsList = assets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    setAssetsToShow(newAssetsList);
  };

  useEffect(() => {
    getUnitsData();
    getAssetsData();
  }, []);

  useEffect(() => {
    onSelectUnit();
  }, [selectedUnit]);

  return (
    <Layout
      headerTitle='Unidades'
      units={units}
      selectedUnit={selectedUnit}
      setSelectedUnit={setSelectedUnit}>
      <div className='content'>
        {assetsToShow?.map((asset, index) => (
          <AssetMainCard
            key={index}
            asset={asset}
            selectedUnit={selectedUnit}
            paramPrefix='ativo'
          />
        ))}
      </div>

      <Outlet />
    </Layout>
  );
};

export default Home;
