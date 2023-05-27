import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { RevenuesummeryComponent } from './revenuesummery/revenuesummery.component';
import { ContractDetailComponent } from './contracts/contract-detail/contract-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent ,children: [
    {
        path: '',
        redirectTo: 'revenue',
        pathMatch: 'full'
    },
    {
      path:'revenue',
      component: RevenuesummeryComponent
    },
    {
        path: 'agreement',
        component: ContractsComponent,
    },
    {
      path: 'agreement-details',
      component: ContractDetailComponent,
    },
    {
        path: 'contractors',
        component: ContractorsComponent,
    }
] },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
