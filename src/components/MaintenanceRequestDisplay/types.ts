export interface MaintenanceRequestDisplayProps {
  requestData: RequestData;
}

interface RequestData {
  code: string;
  createdAt: string;
  priority: string;
  responsible: string;
  contact: string;
}
