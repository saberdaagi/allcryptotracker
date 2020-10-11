import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'crypto',
    component: TabsPage,
    children : [
      {
        path: 'bitcoin',
        loadChildren: () => import('../currencies/bitcoin/bitcoin.module').then( m => m.BitcoinPageModule)
      },
      {
        path: 'litecoin',
        loadChildren: () => import('../currencies/litecoin/litecoin.module').then( m => m.LitecoinPageModule)
      },
      {
        path: 'ethereum',
        loadChildren: () => import('../currencies/ethereum/ethereum.module').then( m => m.EthereumPageModule)
      },
      {
        path: 'xrp',
        loadChildren: () => import('../currencies/xrp/xrp.module').then( m => m.XrpPageModule)
      },
      {
        path: '',
        redirectTo: '/crypto/bitcoin',
        pathMatch: 'full'
      }]
  },
  {
    path: '',
    redirectTo: '/crypto/bitcoin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
