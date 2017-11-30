import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../../../services/';
import { TourService } from '../../../services/tour.service';

@Component({
  selector: 'app-peer-list',
  template: `<entity-table [title]="title" [conf]="this"></entity-table>`
})

export class PeerListComponent {
  public title = "Peers";
  protected resource_name: string = 'account/users';
  // protected route_add: string[] = [];
  public columns: Array < any > = [
    { name: 'PeerName', prop: 'bsdusr_username' },
    { name: 'Type', prop: 'bsdusr_home' },
  ];

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
  };

  getAddActions() {
    let actions = [];
    actions.push({
      label: "Create FreeNAS",
      icon: "card_membership",
      onClick: () => {
        this.router.navigate(
          new Array('').concat(["peer", "freenas"]));
      }
    }, {
      label: "Create SSH",
      icon: "system_update_alt",
      onClick: () => {
        this.router.navigate(
          new Array('').concat(["peer", "ssh"]));
      }
    },{
      label: "Create Amazon-S3",
      icon: "system_update_alt",
      onClick: () => {
        this.router.navigate(new Array('').concat(
          ["peer", "amazon"]));
      }
    }, {
      label: "Create VMWare",
      icon: "vpn_lock",
      onClick: () => {
        this.router.navigate(new Array('').concat(
          ["peer", "vmware"]));
      }
    });

    return actions;
  }

  getPeerList() {
    this.rest.get(this.resource_name, {}).subscribe((res) => {});
  }

  constructor(protected rest: RestService, private router: Router, private tour: TourService) {
    this.getPeerList()
  }
}
