export interface Asset {
  companyId: number;
  healthscore: number;
  id: number;
  image: string;
  metrics: {
    lastUptimeAt: Date;
    totalCollectsUptime: number;
    totalUptime: number;
  };
  model: 'motor' | 'fan';
  name: string;
  sensors: string[];
  specifications: {
    maxTemp?: number;
    power?: number;
    rpm?: number | null;
  };
  status: 'inDowntime' | 'inAlert' | 'inOperation';
  unitId: number;
}
