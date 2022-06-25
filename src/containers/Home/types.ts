import { Asset } from '../../types/asset';
import { Unit } from '../../types/unit';

export interface HomeProps {
  localState: LocalStateType;
  handlers: HandlersType;
}

export interface LocalStateType {
  units: Unit[];
  selectedUnit: number;
  isLoading: boolean;
  assetsToShow: Asset[];
}

export interface HandlersType {
  setSelectedUnit: (n: number) => void;
}
