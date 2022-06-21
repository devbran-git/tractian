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
  model: string;
  name: string;
  sensors: string[];
  specifications: {
    maxTemp?: 53;
    power?: 1.5;
    rpm?: number | null;
  };
  status: 'inDowntime' | 'inAlert' | 'inOperation';
  unitId: number;
}
