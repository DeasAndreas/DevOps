import { NgModule } from '@angular/core';
import { CardUiComponent } from './card-ui/card-ui';
import { PanierComponent } from './panier/panier';
import { PanierHistComponent } from './panier-hist/panier-hist';
@NgModule({
	declarations: [CardUiComponent,
    PanierComponent,
    PanierHistComponent],
	imports: [],
	exports: [CardUiComponent,
    PanierComponent,
    PanierHistComponent]
})
export class ComponentsModule {}
