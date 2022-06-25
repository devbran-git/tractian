import { Asset } from '../../types/asset';
import { Unit } from '../../types/unit';

export interface MaintenanceProps {
  localState: LocalStateType;
  handlers: HandlersType;
}

export interface LocalStateType {
  units: Unit[];
  isLoading: boolean;
  selectedUnit: number;
  assetsToShow: Asset[];
}

export interface HandlersType {
  setSelectedUnit: (n: number) => void;
}
