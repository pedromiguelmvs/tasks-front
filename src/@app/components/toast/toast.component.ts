import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppToastService } from '@app/services/toast';
import { appAnimations } from '@app/animations';

import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-toast',
  animations: appAnimations,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppToastComponent implements OnInit {
  public color: string;
  public icon: string;
  public message: { title: string; description?: string[] };
  public show: boolean = false;
  public progressValue: number = 100;
  private timeoutId: any;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private readonly service: AppToastService) {}

  ngOnInit(): void {
    this.service.show$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((value) => {
        this.show = value;
        this.show && this.onMouseLeave();
      });

    this.service.icon$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((value) => {
        this.icon = value;
      });

    this.service.color$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((value) => {
        this.color = value;
      });

    this.service.message$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((value: {title: string, description?: string[]}) => {
        this.message = value;
      });
  }

  onMouseEnter(): void {
    clearTimeout(this.timeoutId);
  }

  onMouseLeave(): void {
    this.progressValue = 100;
    this.timeoutId = setInterval(() => {
      this.progressValue -= 1;
      if (this.progressValue <= 0) {
        clearInterval(this.timeoutId);
        this.service.hide();
      }
    }, 5000 / 100);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  hide(): void {
    this.service.hide();
  }
}

