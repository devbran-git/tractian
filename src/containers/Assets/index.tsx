import './charts.css';
import { useEffect, useMemo, useState } from 'react';

import { useAssets } from '../../hooks/assets';

import { Series } from '../../components/HealthScoreChart/types';
import AssetsLayout from './layout';

const Assets: React.FC = () => {
  const { units, assets, isLoading, selectedUnit, setSelectedUnit } =
    useAssets();

  const [assetsByStatus, setAssetsByStatus] = useState<string[]>([]);
  const [assetsByHealthScore, setAssetsByHealthScore] = useState<Series[]>([]);

  const filteredAssetsToShow = useMemo(() => {
    const initialAssetsList = assets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    const filteredByStatus = initialAssetsList.map((item) => item.status);

    const filteredByHealthScore = initialAssetsList.map((item) => {
      return {
        name: item?.name,
        data: [item?.healthscore],
      };
    });

    return {
      filteredByStatus,
      filteredByHealthScore,
    };
  }, [assets, selectedUnit]);

  useEffect(() => {
    setAssetsByStatus(filteredAssetsToShow.filteredByStatus);
    setAssetsByHealthScore(filteredAssetsToShow.filteredByHealthScore);
  }, [filteredAssetsToShow]);

  const localState = {
    units,
    isLoading,
    selectedUnit,
    assetsByStatus,
    assetsByHealthScore,
  };

  const handlers = {
    setSelectedUnit,
  };

  return <AssetsLayout localState={localState} handlers={handlers} />;
};

export default Assets;
