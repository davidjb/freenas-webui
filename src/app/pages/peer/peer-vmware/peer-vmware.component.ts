import { ApplicationRef, Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

import { RestService, WebSocketService } from '../../../services/';
import { FieldConfig } from '../../common/entity/entity-form/models/field-config.interface';

@Component({
    selector: 'app-peer-vmware',
    template: `<entity-form [conf]="this"></entity-form>`
})

export class PeerVMwareComponent {
    protected resource_name: string = 'system/certificate/csr';
    protected route_success: string[] = ['system', 'certificates'];
    protected isEntity: boolean = true;

    protected fieldConfig: FieldConfig[] = [
      {
        type: 'input',
        name: 'name',
        placeholder: 'Name'
      },
      {
        type: 'input',
        name: 'Address',
        placeholder: 'IP Address'
      },
      {
        type: 'input',
        name: 'username',
        placeholder: 'Username',
      },
      {
        type: 'input',
        name: 'password',
        placeholder: 'Password',
        inputType: 'password'
      },
      {
        type: 'select',
        name: 'interval',
        placeholder: 'Health Check Interval',
        options: []
      }
    ];
}