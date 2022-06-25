import { Outlet } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

import Layout from '../../components/Layout';
import AssetMainCard from '../../components/AssetMainCard';

import { HomeProps } from './types';

const HomeLayout: React.FC<HomeProps> = ({
  localState,
  handlers,
}: HomeProps) => {
  const { units, selectedUnit, isLoading, assetsToShow } = localState;
  const { setSelectedUnit } = handlers;

  return (
    <Layout
      headerTitle='Unidades'
      units={units}
      isLoading={isLoading}
      selectedUnit={selectedUnit}
      setSelectedUnit={setSelectedUnit}>
      <div className='content'>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          assetsToShow?.map((asset, index) => (
            <AssetMainCard
              key={index}
              asset={asset}
              selectedUnit={selectedUnit}
              paramPrefix='ativo'
            />
          ))
        )}
      </div>

      <Outlet />
    </Layout>
  );
};

export default HomeLayout;
