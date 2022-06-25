import { Series } from '../../components/HealthScoreChart/types';
import { Unit } from '../../types/unit';

export interface AssetsProps {
  localState: LocalStateType;
  handlers: HandlersType;
}

export interface LocalStateType {
  units: Unit[];
  isLoading: boolean;
  selectedUnit: number;
  assetsByStatus: string[];
  assetsByHealthScore: Series[];
}

export interface HandlersType {
  setSelectedUnit: (n: number) => void;
}
