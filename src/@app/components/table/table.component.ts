import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

import { AppTableInterface } from './table.types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class AppTableComponent implements OnInit {
  @Input() config: AppTableInterface;
  @Input() data: any[] & { rows: any[]; count: number };
  @Input() selection = new SelectionModel<number>(true, []);
  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Output() filtered: EventEmitter<any> = new EventEmitter();
  @Output() sortabled: EventEmitter<any> = new EventEmitter();
  @Output() paginated: EventEmitter<any> = new EventEmitter();
  @Output() actionListener: EventEmitter<any> = new EventEmitter();

  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() action: EventEmitter<any> = new EventEmitter();
  @Output() done: EventEmitter<any> = new EventEmitter();

  public defaultPageSize: number = 5;
  public pageIndex: number;
  public pageSize: number;
  public dataSource: any[] = null;
  public dataSourceLength: number;

  public filterValue: string = '';

  ngOnInit(): void {
    this.defaultPageSize = this.config?.paginatorConfig?.defaultPageSize
      ? this.config.paginatorConfig.defaultPageSize
      : this.defaultPageSize;
    this.pageIndex = 0;
    this.pageSize = this.defaultPageSize;

    if (!this.config?.paginatorConfig?.requestPagination) {
      this.dataSource = this.data.slice(0, this.defaultPageSize);
    } else {
      this.dataSource = this.data.rows;
    }
  }

  ngOnChanges(): void {
    this.pageIndex = 0;
    this.pageSize = this.defaultPageSize;

    if (!this.config?.paginatorConfig?.requestPagination) {
      this.dataSource = this.data.slice(0, this.defaultPageSize);
      this.dataSourceLength = this.data.length;
    } else {
      this.dataSource = this.data.rows;
      this.dataSourceLength = this.data.count;
    }
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row.id));
  }

  sortData(sort: Sort): void {
    if (!this.config?.sortConfig?.requestPagination) {
      if (!sort.active || sort.direction === '') {
        this.dataSource = this.data.sort((a, b) => a.id - b.id);
      } else {
        this.dataSource = this.data.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          return compare(a[sort.active], b[sort.active], isAsc);
        });
      }

      this.applyPagination();
      this.applyFilter();
    } else {
      this.sortabled.emit(
        sort.direction !== ''
          ? { field: sort.active, sort: sort.direction }
          : {}
      );
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.applyPagination();
  }

  applyPagination(): void {
    if (!this.config?.paginatorConfig?.requestPagination) {
      const startIndex = this.pageIndex * this.pageSize;
      const endIndex = startIndex + this.pageSize;

      this.dataSource = this.data.slice(startIndex, endIndex);
      this.dataSourceLength = this.data.count;
    } else {
      this.dataSource = this.data.rows;
      this.dataSourceLength = this.data.count;
      this.paginated.emit({ pageNumber: this.pageIndex + 1, perPage: this.pageSize });
    }
  }

  applyFilter() {
    if (!this.config?.searchableConfig?.requestPagination) {
      const filterValueLowerCase = this.filterValue.toLowerCase();
      const filteredData = this.data.filter(item => 
        Object.keys(item).some(key =>
          item[key]?.toString().toLowerCase().includes(filterValueLowerCase)
        )
      );
    
      const startIndex = this.pageIndex * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.dataSource = filteredData.slice(startIndex, endIndex);
    } else {
      this.filtered.emit({ name: this.filterValue });
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
