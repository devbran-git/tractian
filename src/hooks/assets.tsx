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
  setIsLoading: (b: boolean) => void;
  setSelectedUnit: (n: number) => void;
  fetchAssetDetailsData: (t: string) => void;
}

interface AssetsProviderProps {
  children: ReactNode;
}

const AssetsContext = createContext({} as AssetsContextProps);

const AssetsProvider = ({ children }: AssetsProviderProps) => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [assetDetails, setAssetDetails] = useState({} as Asset);

  const fetchUnitsData = async () => {
    try {
      const unitResponse = await api.get('units');

      setUnits(unitResponse?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAssetsData = async () => {
    try {
      const assetsResponse: AxiosResponse<Asset[]> = await api.get('assets');
      const totalAssets = assetsResponse?.data;

      setAssets(totalAssets);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAssetDetailsData = async (assetId: string) => {
    try {
      const assetResponse = await api.get(`assets/${assetId}`);
      const assetDetailsData = assetResponse.data;

      setAssetDetails(assetDetailsData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUnitsData();
    fetchAssetsData();
  }, []);

  return (
    <AssetsContext.Provider
      value={{
        units,
        assets,
        isLoading,
        assetDetails,
        selectedUnit,
        setIsLoading,
        setSelectedUnit,
        fetchAssetDetailsData,
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
