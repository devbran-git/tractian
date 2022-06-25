import { useState, useMemo, useEffect } from 'react';

import HomeLayout from './layout';

import { useAssets } from '../../hooks/assets';

import { Asset } from '../../types/asset';

const Home = () => {
  const { units, assets, selectedUnit, isLoading, setSelectedUnit } =
    useAssets();

  const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);

  const filteredAssetsToShow = useMemo(() => {
    const initialAssetsList = assets?.filter(
      (asset) => asset.unitId === selectedUnit
    );

    return initialAssetsList;
  }, [selectedUnit, assets]);

  useEffect(() => {
    setAssetsToShow(filteredAssetsToShow);
  }, [filteredAssetsToShow]);

  const localState = {
    units,
    isLoading,
    selectedUnit,
    assetsToShow,
  };
  const handlers = {
    setSelectedUnit,
  };

  return <HomeLayout localState={localState} handlers={handlers} />;
};

export default Home;
