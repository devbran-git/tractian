import { Outlet } from 'react-router-dom';

import Layout from '../../components/Layout';
import AssetMainCard from '../../components/AssetMainCard';

import { MaintenanceProps } from './types';

const MaintenanceLayout: React.FC<MaintenanceProps> = ({
  localState,
  handlers,
}: MaintenanceProps) => {
  const { units, isLoading, selectedUnit, assetsToShow } = localState;

  const { setSelectedUnit } = handlers;

  return (
    <Layout
      headerTitle='Manutenção'
      units={units}
      isLoading={isLoading}
      selectedUnit={selectedUnit}
      setSelectedUnit={setSelectedUnit}>
      <div className='content'>
        {assetsToShow?.map((asset, index) => (
          <AssetMainCard
            key={index}
            asset={asset}
            selectedUnit={selectedUnit}
            paramPrefix='manutencao'
          />
        ))}
      </div>

      <Outlet />
    </Layout>
  );
};

export default MaintenanceLayout;
