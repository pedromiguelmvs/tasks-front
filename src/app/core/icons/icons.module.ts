import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule()
export class IconsModule {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace(
      'humbleicons',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/humbleicons.svg'
      )
    );
    this.matIconRegistry.addSvgIconSetInNamespace(
      'uil',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/uil.svg'
      )
    );
    this.matIconRegistry.addSvgIconSetInNamespace(
      'mat_outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/material-outline.svg'
      )
    );
    this.matIconRegistry.addSvgIconSetInNamespace(
      'mat_solid',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/material-solid.svg'
      )
    );
  }
}
