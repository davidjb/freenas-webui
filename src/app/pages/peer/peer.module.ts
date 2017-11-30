import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgxDualListboxModule } from '../../components/common/dual-list/dual-list.module';

import { EntityModule } from '../common/entity/entity.module';

import { PeerListComponent } from './peer-list/';
import { PeerFreeNASComponent } from './peer-freenas/';
import { PeerSSHComponent } from './peer-ssh/';
import { PeerVMwareComponent } from './peer-vmware/';
import { PeerAmazonComponent } from './peer-amazon/';

import { routing } from './peer.routing';
@NgModule({
  imports: [
    EntityModule, CommonModule, FormsModule, MaterialModule, NgxDualListboxModule,
    ReactiveFormsModule, routing
  ],
  declarations: [
    PeerListComponent,
    PeerFreeNASComponent,
    PeerSSHComponent,
    PeerVMwareComponent,
    PeerAmazonComponent
  ],
  providers: [
  ]
})
export class PeerModule {}
