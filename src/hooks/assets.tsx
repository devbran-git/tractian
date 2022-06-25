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
  assetDetails: Asset;
  selectedUnit: number;
  setSelectedUnit: (n: number) => void;
  getAssetDetailsData: (t: string) => void;
}

interface AssetsProviderProps {
  children: ReactNode;
}

const AssetsContext = createContext({} as AssetsContextProps);

const AssetsProvider = ({ children }: AssetsProviderProps) => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [assetDetails, setAssetDetails] = useState({} as Asset);

  const fetchUnitsData = async () => {
    const unitResponse = await api.get('units');

    setUnits(unitResponse?.data);
  };

  const fetchAssetsData = async () => {
    const assetsResponse: AxiosResponse<Asset[]> = await api.get('assets');

    const totalAssets = assetsResponse?.data;

    setAssets(totalAssets);
  };

  const getAssetDetailsData = async (assetId: string) => {
    const assetResponse = await api.get(`assets/${assetId}`);
    const assetDetailsData = assetResponse.data;

    setAssetDetails(assetDetailsData);
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
        assetDetails,
        selectedUnit,
        setSelectedUnit,
        getAssetDetailsData,
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
