import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { AppLoadingService } from '@app/services/loading';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'appLoadingBar',
})
export class AppLoadingBarComponent implements OnChanges, OnInit, OnDestroy {
  @Input() autoMode: boolean = true;
  public mode: 'determinate' | 'indeterminate';
  public progress: number = 0;
  public show: boolean = true;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private service: AppLoadingService) {}

  ngOnInit(): void {
    this.service.mode$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((value) => {
        this.mode = value;
      });

    this.service.progress$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((value) => {
        this.progress = value;
      });

    this.service.show$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((value) => {
        this.show = value;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('autoMode' in changes) {
      this.service.setAutoMode(
        coerceBooleanProperty(changes.autoMode.currentValue)
      );
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }
}
