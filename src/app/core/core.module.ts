import { NgModule, Optional, SkipSelf } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { IconsModule } from "./icons/icons.module";

@NgModule({
  imports: [AuthModule.forRoot(), IconsModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule only.'
      )
    }
  }
}
