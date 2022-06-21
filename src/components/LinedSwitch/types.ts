import { Unit } from '../../types/unit';

export interface LinedSwitchProps {
  units: Unit[];
  selectedUnit: number;
  setSelectedUnit: (n: number) => void;
}
