import { Asset } from '../../types/asset';

export interface AssetDetailProps {
  localState: LocalStateType;
  handlers: HandlersType;
}

export interface LocalStateType {
  isLoading: boolean;
  namesList: string[];
  requestData: RequestData;
  isModalOpen: boolean;
  assetDetails: Asset;
  maintenanceRequested: boolean;
}

export interface HandlersType {
  handleSelectResponsible: () => void;
  onMaintenanceRequest: () => void;
  handleSelectPriority: () => void;
  handleModalCancel: () => void;
  setIsModalOpen: () => void;
  goBack: () => string;
}

export interface RequestData {
  code: string;
  createdAt: string;
  priority: string;
  responsible: string;
  contact: string;
}
