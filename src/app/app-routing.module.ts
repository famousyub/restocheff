import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefloginComponent } from './cheflogin/cheflogin.component';
import { ChefnotifComponent } from './chefnotif/chefnotif.component';
import { CheforderComponent } from './cheforder/cheforder.component';
import { ChehomeComponent } from './chehome/chehome.component';

const routes: Routes = [

    {path: '',component:ChefloginComponent},
    {path: 'order',component:CheforderComponent},
    {path: 'notif',component:ChefnotifComponent},
    {path: 'home',component:ChehomeComponent},
    {path: 'order/:id',component:CheforderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
