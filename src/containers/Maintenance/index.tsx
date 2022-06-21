import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BottomTab from '../../components/BottomTab';

import { AxiosResponse } from 'axios';

import { api } from '../../services/api';
import { Asset } from '../../types/asset';
import { Unit } from '../../types/unit';
import Layout from '../../components/Layout';
import LinedSwitch from '../../components/LinedSwitch';

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
    <Layout headerTitle='Manutenção'>
      <LinedSwitch
        units={units}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
      />

      {assetsToShow?.map((asset, index) => (
        <Link key={index} to={`/manutencao-${asset.id}`}>
          <p>{asset.name}</p>
        </Link>
      ))}

      <BottomTab />
      <Outlet />
    </Layout>
  );
};

export default Maintenance;
