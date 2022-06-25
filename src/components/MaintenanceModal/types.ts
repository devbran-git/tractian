import { Asset } from '../../types/asset';
export interface MaintenanceModalProps {
  asset: Asset;
  usersList: string[];
  isModalOpen: boolean;
  errorMessage: string;
  handleSelectPriority: (v: string) => void;
  handleSelectResponsible: (v: string) => void;
  handleModalCancel: () => void;
  onMaintenanceRequest: () => void;
}
