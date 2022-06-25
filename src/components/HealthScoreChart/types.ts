export interface HealthScoreChartProps {
  assetsByHealthScore: Series[];
}

export interface Series {
  name: string;
  data: number[];
}
