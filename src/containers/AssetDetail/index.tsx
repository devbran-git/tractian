import './styles.css';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { LeftOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';

import AssetDetailsCard from '../../components/AssetDetailsCard';
import SpecificationsStack from '../../components/SpecificationsStack';
import MonitoringDisplay from '../../components/MonitoringDisplay';

import { api } from '../../services/api';

import AssetAssetMessage from '../../components/AssetMessage';
import PrimaryButton from '../../components/PrimaryButton';
import MaintenanceModal from '../../components/MaintenanceModal';

import { colors } from '../../styles/colors';

import { Asset } from '../../types/asset';
import { User } from '../../types/user';
import { RequestData } from './types';
import MaintenanceRequestDisplay from '../../components/MaintenanceRequestDisplay';

const AssetDetail: React.FC = () => {
  const { Text } = Typography;

  const { assetParam } = useParams();

  const assetParams = assetParam?.split('-') as string[];
  const assetId = assetParams[2];
  const unitId = assetParams[1];

  const [users, setUsers] = useState<User[]>([]);
  const [namesList, setNamesList] = useState<string[]>([]);
  const [assetDetails, setAssetDetails] = useState({} as Asset);
  const [requestData, setRequestData] = useState({} as RequestData);
  const [priority, setPriority] = useState('');
  const [responsible, setResponsible] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [maintenanceRequested, setMaintenanceRequested] = useState(false);

  const goBack = () => {
    const routeToBack = assetParams[0];

    if (routeToBack === 'manutencao') return '/manutencao';

    return '/';
  };

  const handleModalCancel = () => setIsModalOpen(false);

  const handleSelectPriority = (value: string) => setPriority(value);

  const handleSelectResponsible = (value: string) => setResponsible(value);

  const onMaintenanceRequest = () => {
    if (!!priority && !!responsible) {
      setIsModalOpen(false);

      const date = new Date();

      const requestDate = new Intl.DateTimeFormat('pt-BR').format(date);

      const responsibleContact = users.find(
        (user) => user.name === responsible
      );

      const formattedRequestData = {
        code: `OS${assetDetails?.sensors}${assetDetails?.id}`,
        createdAt: String(requestDate),
        priority: priority,
        responsible: responsible,
        contact: String(responsibleContact?.email),
      };

      setRequestData(formattedRequestData);
      setMaintenanceRequested(true);
    } else {
      alert('Selecione o nível de prioridade e o responsável pela manutenção.');
    }
  };

  const getAssetDetailsData = async () => {
    const assetResponse = await api.get(`assets/${assetId}`);
    const assetDetailsData = assetResponse.data;

    setAssetDetails(assetDetailsData);
  };

  const getUnitUsers = async () => {
    const usersResponse = await api.get(`users`);
    const usersData = usersResponse.data;

    setUsers(usersData);
  };

  const usersList = users?.filter((user) => user?.unitId === Number(unitId));

  const onListUsersNames = () => {
    const list = [];

    for (let user of usersList) {
      list.push(user.name);
    }

    setNamesList(list);
  };

  useEffect(() => {
    getAssetDetailsData();
    getUnitUsers();
  }, []);

  useEffect(() => {
    onListUsersNames();
  }, [users]);

  useEffect(() => {
    setIsLoading(false);
  }, [assetDetails]);

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
                    <PrimaryButton onClick={() => setIsModalOpen(true)} />
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

export default AssetDetail;
