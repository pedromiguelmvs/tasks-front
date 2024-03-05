import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Core Modules
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';

// Libs Modules
import { AppConfigModule } from '@app/services/config';
import { AppToastModule } from '@app/components/toast';

// Configs
import { appConfig } from './core/config/app.config';
import { GraphQLModule } from './graphql.module';
import { appRoutes } from './app.routing';
import { ApplicationModule } from '@app/application.module';


const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [
    BrowserModule,
    AppToastModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    ApplicationModule,
    AppConfigModule.forRoot(appConfig),
    LayoutModule,
    GraphQLModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
