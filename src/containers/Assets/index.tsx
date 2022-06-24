import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

import { AxiosResponse } from 'axios';

import { api } from '../../services/api';
import { Asset } from '../../types/asset';
import { Unit } from '../../types/unit';
import { LoadingOutlined } from '@ant-design/icons';

const Assets: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);
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
    const filteredByHealthScore = initialAssetsList.map(
      (item) => item.healthscore
    );

    console.log('INITIAL - STATUS  --->', filteredByStatus);
    console.log('INITIAL - HEALTHSCORE --->', filteredByHealthScore);

    setAssets(totalAssets);
    setAssetsToShow(initialAssetsList);
  };

  const onSelectUnit = () => {
    const newAssetsList = assets.filter(
      (asset) => asset.unitId === selectedUnit
    );

    const newFilteredByStatus = newAssetsList.map((item) => item.status);
    const newFilteredByHealthScore = newAssetsList.map(
      (item) => item.healthscore
    );

    console.log('NOVO  - STATUS  --->', newFilteredByStatus);
    console.log('NOVO - HEALTHSCORE --->', newFilteredByHealthScore);

    setAssetsToShow(newAssetsList);
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
        assetsToShow?.map((asset, index) => (
          <Link key={index} to={`/ativo-${asset.id}`}>
            <p>{asset.name}</p>
          </Link>
        ))
      )}
    </Layout>
  );
};

export default Assets;
