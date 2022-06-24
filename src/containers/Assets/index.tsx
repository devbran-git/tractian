import { useEffect, useState } from 'react';

import Layout from '../../components/Layout';

import { AxiosResponse } from 'axios';

import { api } from '../../services/api';
import { Asset } from '../../types/asset';
import { Unit } from '../../types/unit';
import { LoadingOutlined } from '@ant-design/icons';
import StatusChart from '../../components/StatusChart';
import HealthScoreChart from '../../components/HealthScoreChart';
import { colors } from '../../styles/colors';
import { Series } from '../../components/HealthScoreChart/types';

const Assets: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [assetsByStatus, setAssetsByStatus] = useState<string[]>([]);
  const [assetsByHealthScore, setAssetsByHealthScore] = useState<Series[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState(1);

  const getUnitsData = async () => {
    let unitResponse = await api.get('units');

    setUnits(unitResponse?.data);
  };

  const getAssetsData = async () => {
    let assetsResponse: AxiosResponse<Asset[]> = await api.get('assets');

    let totalAssets = assetsResponse?.data;

    const initialAssetsList = totalAssets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    const filteredByStatus = initialAssetsList.map((item) => item.status);

    const filteredByHealthScore = initialAssetsList.map((item) => {
      return {
        name: item?.name,
        data: [item?.healthscore],
      };
    });

    console.log('O que tem no console --->', filteredByHealthScore);

    setAssets(totalAssets);
    setAssetsByStatus(filteredByStatus);
    setAssetsByHealthScore(filteredByHealthScore);
  };

  const onSelectUnit = () => {
    const newAssetsList = assets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    const newFilteredByStatus = newAssetsList.map((item) => item.status);

    const newFilteredByHealthScore = newAssetsList.map((item) => {
      return {
        name: item?.name,
        data: [item?.healthscore],
      };
    });

    setAssetsByStatus(newFilteredByStatus);
    setAssetsByHealthScore(newFilteredByHealthScore);
  };

  useEffect(() => {
    getUnitsData();
    getAssetsData();
  }, []);

  useEffect(() => {
    onSelectUnit();
  }, [selectedUnit]);

  useEffect(() => {
    setIsLoading(false);
  }, [assets]);

  return (
    <Layout
      headerTitle='Ativos'
      units={units}
      selectedUnit={selectedUnit}
      setSelectedUnit={setSelectedUnit}>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <div style={{ backgroundColor: colors.smoke, paddingBottom: 60 }}>
          <StatusChart assetsByStatus={assetsByStatus} />

          <HealthScoreChart assetsByHealthScore={assetsByHealthScore} />
        </div>
      )}
    </Layout>
  );
};

export default Assets;
