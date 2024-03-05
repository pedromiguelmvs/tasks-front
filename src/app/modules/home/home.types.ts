export interface DashboardSummaryInterface {
  name: string;
  value: number;
  subtitle: string;
  subtitleValue: string;
  ringColor: string;
}

export interface DashboardReportInterface {
  company?: any;
  user?: any;
  status: string;
  createdAt: Date;
}

export interface TaskInterface {
  id: number;
  name: string;
  description: string;
  userId: number;
}