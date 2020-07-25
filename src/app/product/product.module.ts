import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import {HttpClientModule} from '@angular/common/http';
// ngrx
import { StoreModule } from '@ngrx/store';
// import { reducer } from './state/reducer/product.reducer';
import * as productReducer from './state/reducer/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/effects/product.effects';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductRoutingModule,
    StoreModule.forFeature(productReducer.PRODUCT_FEATURE_KEY, productReducer.reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
