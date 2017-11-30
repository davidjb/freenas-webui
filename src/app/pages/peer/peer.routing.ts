import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeerListComponent } from './peer-list/';
import { PeerFreeNASComponent } from './peer-freenas';
import { PeerSSHComponent } from './peer-ssh/';
import { PeerVMwareComponent } from './peer-vmware/';
import { PeerAmazonComponent } from './peer-amazon/';

export const routes: Routes = [
	 {
      path: '',
      component: PeerListComponent,
      data: { title: 'Instances', breadcrumb: 'PeerList'}
    },
    {
    	path: 'freenas',
    	component: PeerFreeNASComponent,
    	data: { title: 'FreeNAS', breadcrumb: 'FreeNAS'}
    },
    {
    	path: 'ssh',
    	component: PeerSSHComponent,
    	data: { title: 'ssh', breadcrumb: 'ssh'}
    },
    {
    	path: 'vmware',
    	component: PeerVMwareComponent,
    	data: { title: 'vmware', breadcrumb: 'vmware'}
    },
    {
    	path: 'amazon',
    	component: PeerAmazonComponent,
    	data: { title: 'amazon', breadcrumb: 'amazon'}
    },    
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);