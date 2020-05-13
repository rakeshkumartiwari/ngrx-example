import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const homeRout: Routes = [{ path: '', pathMatch: 'full', component: HomeComponent }];

@NgModule({
    imports: [RouterModule.forChild(homeRout)],
    exports: [RouterModule]
})

export class HomeRoutingModule {

}
