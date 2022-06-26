import './styles.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AssetDetailsLayout from './layout';

import { useAssets } from '../../hooks/assets';
import { useUsers } from '../../hooks/users';

import { RequestData } from './types';

const AssetDetail: React.FC = () => {
  const { assetParam } = useParams();
  const { isLoading, assetDetails, setIsLoading, fetchAssetDetailsData } =
    useAssets();
  const { users } = useUsers();

  const assetParams = assetParam?.split('-') as string[];
  const assetId = assetParams[2];
  const unitId = assetParams[1];

  const [namesList, setNamesList] = useState<string[]>([]);
  const [requestData, setRequestData] = useState({} as RequestData);
  const [priority, setPriority] = useState('');
  const [responsible, setResponsible] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [maintenanceRequested, setMaintenanceRequested] = useState(false);

  const goBack = () => {
    const routeToBack = assetParams[0];

    if (routeToBack === 'manutencao') return '/manutencao';

    return '/';
  };

  const onOpenModal = () => setIsModalOpen(true);
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
      setErrorMessage('Selecione as opções dos campos acima.');
      return;
    }
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
    fetchAssetDetailsData(assetId);
  }, [assetId]);

  useEffect(() => {
    onListUsersNames();
  }, [users]);

  useEffect(() => {
    setIsLoading(false);
  }, [assetDetails]);

  const localState = {
    isLoading,
    namesList,
    requestData,
    isModalOpen,
    assetDetails,
    errorMessage,
    maintenanceRequested,
  };
  const handlers = {
    handleSelectResponsible,
    onMaintenanceRequest,
    handleSelectPriority,
    handleModalCancel,
    onOpenModal,
    goBack,
  };

  return <AssetDetailsLayout localState={localState} handlers={handlers} />;
};

export default AssetDetail;
