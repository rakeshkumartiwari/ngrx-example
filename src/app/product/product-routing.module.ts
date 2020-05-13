import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const productRout: Routes = [{ path: '', pathMatch: 'full', component: ProductComponent }];

@NgModule({
    imports: [RouterModule.forChild(productRout)],
    exports: [RouterModule]
})

export class ProductRoutingModule {

}