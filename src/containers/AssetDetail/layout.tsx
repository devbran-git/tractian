import './styles.css';
import { Typography } from 'antd';
import { LeftOutlined, LoadingOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import AssetDetailsCard from '../../components/AssetDetailsCard';
import SpecificationsStack from '../../components/SpecificationsStack';
import MonitoringDisplay from '../../components/MonitoringDisplay';
import AssetAssetMessage from '../../components/AssetMessage';
import PrimaryButton from '../../components/PrimaryButton';
import MaintenanceModal from '../../components/MaintenanceModal';
import MaintenanceRequestDisplay from '../../components/MaintenanceRequestDisplay';

import { colors } from '../../styles/colors';

import { AssetDetailProps } from './types';

const AssetDetailsLayout: React.FC<AssetDetailProps> = ({
  localState,
  handlers,
}: AssetDetailProps) => {
  const {
    isLoading,
    namesList,
    requestData,
    isModalOpen,
    assetDetails,
    errorMessage,
    maintenanceRequested,
  } = localState;

  const {
    handleSelectResponsible,
    onMaintenanceRequest,
    handleSelectPriority,
    handleModalCancel,
    onOpenModal,
    goBack,
  } = handlers;

  const { Text } = Typography;

  return (
    <>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <>
          <div className='details-container'>
            <div style={{ padding: '0 24px' }}>
              <Link className='back-button' to={goBack()}>
                <LeftOutlined />
                <Text style={{ color: colors.primary }}>Voltar</Text>
              </Link>

              <AssetDetailsCard asset={assetDetails} />
            </div>

            <SpecificationsStack assetDetails={assetDetails} />

            <div
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 24px 40px',
                marginTop: '12px',
              }}>
              {maintenanceRequested ? (
                <MaintenanceRequestDisplay requestData={requestData} />
              ) : (
                <>
                  <MonitoringDisplay assetDetails={assetDetails} />

                  <AssetAssetMessage asset={assetDetails} />

                  {assetDetails?.status !== 'inOperation' && (
                    <PrimaryButton onClick={onOpenModal} />
                  )}

                  {assetDetails?.status === 'inOperation' && (
                    <div style={{ width: '100%', maxHeight: '48px' }} />
                  )}
                </>
              )}
            </div>

            <MaintenanceModal
              asset={assetDetails}
              usersList={namesList}
              isModalOpen={isModalOpen}
              errorMessage={errorMessage}
              handleSelectPriority={handleSelectPriority}
              handleSelectResponsible={handleSelectResponsible}
              handleModalCancel={handleModalCancel}
              onMaintenanceRequest={onMaintenanceRequest}
            />
          </div>
        </>
      )}
    </>
  );
};

export default AssetDetailsLayout;
