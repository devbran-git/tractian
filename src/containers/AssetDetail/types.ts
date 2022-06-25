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
  errorMessage: string;
  maintenanceRequested: boolean;
}

export interface HandlersType {
  handleSelectResponsible: (v: string) => void;
  handleSelectPriority: (v: string) => void;
  onMaintenanceRequest: () => void;
  handleModalCancel: () => void;
  onOpenModal: () => void;
  goBack: () => string;
}

export interface RequestData {
  code: string;
  createdAt: string;
  priority: string;
  responsible: string;
  contact: string;
}
