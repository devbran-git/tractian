import { Asset } from '../../types/asset';
export interface MaintenanceModalProps {
  asset: Asset;
  usersList: string[];
  isModalOpen: boolean;
  handleSelectPriority: () => void;
  handleSelectResponsible: () => void;
  handleModalCancel: () => void;
  onMaintenanceRequest: () => void;
}
