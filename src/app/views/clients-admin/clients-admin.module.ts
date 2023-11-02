import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsAdminRoutingModule } from './clients-admin-routing.module';
import { ClientsComponent } from './views/clients/clients.component';


@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsAdminRoutingModule
  ]
})
export class ClientsAdminModule { }
