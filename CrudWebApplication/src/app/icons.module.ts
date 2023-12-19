import { NgModule } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@NgModule()
export class IconsModule
{
    constructor(private _matIconRegistry: MatIconRegistry, private _domSanitizer: DomSanitizer) { 
        this._matIconRegistry.addSvgIconSetInNamespace('heroicons_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-solid.svg'));
      }
}