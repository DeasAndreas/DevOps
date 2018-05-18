import { NgModule } from '@angular/core';
import { CardUiComponent } from './card-ui/card-ui';
import { PanierComponent } from './panier/panier';
import { PanierHistComponent } from './panier-hist/panier-hist';
import { MobileCardUiComponent } from './mobile-card-ui/mobile-card-ui';
@NgModule({
	declarations: [CardUiComponent,
    PanierComponent,
    PanierHistComponent,
    MobileCardUiComponent],
	imports: [],
	exports: [CardUiComponent,
    PanierComponent,
    PanierHistComponent,
    MobileCardUiComponent]
})
export class ComponentsModule {}
