import { useEffect, useMemo, useState } from 'react';

import MaintenanceLayout from './layout';

import { useAssets } from '../../hooks/assets';

import { Asset } from '../../types/asset';

const Maintenance = () => {
  const { units, assets, isLoading, selectedUnit, setSelectedUnit } =
    useAssets();

  const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);

  const filteredAssetsToShow = useMemo(() => {
    const toMaintenanceAssets = assets?.filter(
      (toMaintenance) =>
        toMaintenance.status === 'inDowntime' ||
        toMaintenance.status === 'inAlert'
    );

    const unitAssets = toMaintenanceAssets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    return unitAssets;
  }, [assets, selectedUnit]);

  useEffect(() => {
    setAssetsToShow(filteredAssetsToShow);
  }, [selectedUnit, filteredAssetsToShow]);

  const localState = {
    units,
    isLoading,
    selectedUnit,
    assetsToShow,
  };

  const handlers = {
    setSelectedUnit,
  };

  return <MaintenanceLayout localState={localState} handlers={handlers} />;
};

export default Maintenance;
