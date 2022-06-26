import Layout from '../../components/Layout';
import StatusChart from '../../components/StatusChart';
import HealthScoreChart from '../../components/HealthScoreChart';

import { colors } from '../../styles/colors';

import { AssetsProps } from './types';

const AssetsLayout: React.FC<AssetsProps> = ({
  localState,
  handlers,
}: AssetsProps) => {
  const {
    units,
    isLoading,
    selectedUnit,
    assetsByStatus,
    assetsByHealthScore,
  } = localState;

  const { setSelectedUnit } = handlers;

  return (
    <Layout
      headerTitle='Ativos'
      units={units}
      isLoading={isLoading}
      selectedUnit={selectedUnit}
      setSelectedUnit={setSelectedUnit}>
      <div style={{ backgroundColor: colors.smoke, paddingBottom: 60 }}>
        <StatusChart assetsByStatus={assetsByStatus} />

        <HealthScoreChart assetsByHealthScore={assetsByHealthScore} />
      </div>
    </Layout>
  );
};

export default AssetsLayout;
