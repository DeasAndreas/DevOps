import { NgModule } from '@angular/core';
import { CardUiComponent } from './card-ui/card-ui';
import { PanierComponent } from './panier/panier';
import { PanierHistComponent } from './panier-hist/panier-hist';
import { MobileCardUiComponent } from './mobile-card-ui/mobile-card-ui';
import { LogoAnanasComponent } from './logo-ananas/logo-ananas';
import { LogoAnanasMontreDuDoigtComponent } from './logo-ananas-montre-du-doigt/logo-ananas-montre-du-doigt';
import { PricingComponent } from './pricing/pricing';
@NgModule({
	declarations: [CardUiComponent,
    PanierComponent,
    PanierHistComponent,
    MobileCardUiComponent,
    LogoAnanasComponent,
    LogoAnanasMontreDuDoigtComponent,
    PricingComponent],
	imports: [],
	exports: [CardUiComponent,
    PanierComponent,
    PanierHistComponent,
    MobileCardUiComponent,
    LogoAnanasComponent,
    LogoAnanasMontreDuDoigtComponent,
    PricingComponent]
})
export class ComponentsModule {}
