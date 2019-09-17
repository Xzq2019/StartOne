import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // { path: 'customers/:id', data: { preload: true }, loadChildren: () => import('app/customer/customer.module').then(m => m.CustomerModule) },
  // { path: 'orders', data: { preload: true }, loadChildren: () => import('app/orders/orders.module').then(m => m.OrdersModule) },
  // { path: 'about', loadChildren: () => import('app/about/about.module').then(m => m.AboutModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
