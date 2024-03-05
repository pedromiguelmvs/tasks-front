export interface AppTableInterface {
  title: string;
  headers: AppTableHeaderInterface[];
  content: AppTableContentInterface[];
  actions?: boolean;
  selection?: boolean;
  searchable?: boolean;
  searchableConfig?: AppTableFilterConfigInterface;
  paginator?: boolean;
  paginatorConfig?: AppTablePaginatorConfigInterface;
  sortable?: boolean;
  sortConfig?: AppTableSortConfigInterface;
  showMore?: boolean;
}

export interface AppTableHeaderInterface {
  name: string;
  key?: string;
}

export interface AppTableContentInterface {
  type: string;
  key: string;
}

export interface AppTablePaginatorConfigInterface {
  defaultPageSize?: number;
  requestPagination?: boolean;
}

export interface AppTableFilterConfigInterface {
  requestPagination?: boolean;
}

export interface AppTableSortConfigInterface {
  requestPagination?: boolean;
}

export interface AppTablePaginatorInterface {
  pageNumber: number;
  pageSize: number;
}

export interface AppTableSortInterface {
  field: string;
  sort: 'asc' | 'desc';
}