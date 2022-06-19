import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BottomTab from '../../components/BottomTab';
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

  const getAssetsData = async () => {
    let response: AxiosResponse<Asset[]> = await api.get('assets');

    let totalAssets = response?.data;

    const inDowntime = totalAssets.filter(
      (asset) => asset?.status === 'inDowntime'
    );
    const inAlertList = totalAssets.filter(
      (asset) => asset?.status === 'inAlert'
    );

    const initialAssetsList = [...inDowntime, ...inAlertList];

    setAssets(totalAssets);
    setAssetsToShow(initialAssetsList);
  };

  const onSelectUnit = () => {
    const inDowntime = assets.filter((asset) => asset?.status === 'inDowntime');
    const inAlertList = assets.filter((asset) => asset?.status === 'inAlert');

    const newAssetsList = [...inDowntime, ...inAlertList];

    console.log('O que tem no console --->', newAssetsList);

    setAssetsToShow(inAlertList);
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

export default Maintenance;
