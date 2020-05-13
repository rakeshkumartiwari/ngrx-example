import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import {HttpClientModule} from '@angular/common/http'
// ngrx
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductRoutingModule,
    StoreModule.forFeature('product', reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
