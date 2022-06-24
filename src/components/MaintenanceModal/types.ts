import { Asset } from '../../types/asset';
export interface MaintenanceModalProps {
  asset: Asset;
  isModalOpen: boolean;
  handleModalCancel: () => void;
  onMaintenanceRequest: () => void;
}
