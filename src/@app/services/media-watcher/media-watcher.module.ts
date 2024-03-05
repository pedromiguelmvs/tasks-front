import { NgModule } from '@angular/core';
import { AppMediaWatcherService } from '@app/services/media-watcher/media-watcher.service';

@NgModule({
  providers: [AppMediaWatcherService],
})
export class AppMediaWatcherModule {
  constructor() {}
}
