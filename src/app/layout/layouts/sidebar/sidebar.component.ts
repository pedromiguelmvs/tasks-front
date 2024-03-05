import { Subject, takeUntil } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sidebar-layout',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarLayoutComponent implements OnInit, OnDestroy {
  public title = '';
  public companyTitle = null;
  public isMobile: boolean = false;
  public hovered: boolean = false;

  private currentRoute = '';
  private readonly unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private readonly router: Router,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });

    this.currentRoute = this.router.url.split('/')[1];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  handleHovered(event: boolean): void {
    this.hovered = event;
  }
}
