import { Asset } from '../../types/asset';
export interface MaintenanceModalProps {
  asset: Asset;
  usersList: string[];
  isModalOpen: boolean;
  handleSelectPriority: (t: string) => void;
  handleSelectResponsible: (t: string) => void;
  handleModalCancel: () => void;
  onMaintenanceRequest: () => void;
}
