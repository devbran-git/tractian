import { Unit } from '../../types/unit';

export interface LayoutProps {
  units: Unit[];
  headerTitle: string;
  isLoading: boolean;
  selectedUnit: number;
  children: React.ReactNode;
  setSelectedUnit: (n: number) => void;
}
