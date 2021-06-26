import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: "/admin",
    pathMatch: "full",

  },
  {
    path: "auth", component: AuthComponent,
  },
  {
    path: "admin", component: AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
