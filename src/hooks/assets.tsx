import { AxiosResponse } from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';
import { Asset } from '../types/asset';
import { Unit } from '../types/unit';

interface AssetsContextProps {
  units: Unit[];
  assets: Asset[];
  isLoading: boolean;
  selectedUnit: number;
  setSelectedUnit: (n: number) => void;
}

interface AssetsProviderProps {
  children: ReactNode;
}

const AssetsContext = createContext({} as AssetsContextProps);

const AssetsProvider = ({ children }: AssetsProviderProps) => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  // const [assetsToShow, setAssetsToShow] = useState<Asset[]>(assets);
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUnitsData = async () => {
    const unitResponse = await api.get('units');

    setUnits(unitResponse?.data);
  };

  const fetchAssetsData = async () => {
    const assetsResponse: AxiosResponse<Asset[]> = await api.get('assets');

    const totalAssets = assetsResponse?.data;

    setAssets(totalAssets);
  };

  useEffect(() => {
    fetchUnitsData();
    fetchAssetsData();
  }, []);

  useEffect(() => {
    if (assets.length > 0) setIsLoading(false);
  }, [assets]);

  return (
    <AssetsContext.Provider
      value={{
        units,
        assets,
        isLoading,
        selectedUnit,
        setSelectedUnit,
      }}>
      {children}
    </AssetsContext.Provider>
  );
};

const useAssets = () => {
  const context = useContext(AssetsContext);
  return context;
};

export { AssetsProvider, useAssets };
