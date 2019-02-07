import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { MaintaskComponent } from './maintask/maintask.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';   

const routes: Routes = [
  { path : '', redirectTo:'/tree', pathMatch:"full"},
  { path : 'tree' , component: TreeComponent},
  { path : 'person/:id', component: MaintaskComponent},
  { path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
