import { Unit } from '../../types/unit';

export interface LayoutProps {
  units: Unit[];
  headerTitle: string;
  selectedUnit: number;
  children: React.ReactNode;
  setSelectedUnit: (n: number) => void;
}
