import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BottomTab from '../../components/BottomTab';

import { AxiosResponse } from 'axios';

import { api } from '../../services/api';
import { Asset } from '../../types/asset';
import { Unit } from '../../types/unit';

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
    <div style={{ flexDirection: 'column' }} className='container'>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        {units.map((unit, index) => (
          <p key={index} onClick={() => setSelectedUnit(index + 1)}>
            {unit?.name}
          </p>
        ))}
      </div>

      {assetsToShow?.map((asset, index) => (
        <Link key={index} to={`/ativo-${asset.id}`}>
          <p>{asset.name}</p>
        </Link>
      ))}

      <BottomTab />
      <Outlet />
    </div>
  );
};

export default Home;
