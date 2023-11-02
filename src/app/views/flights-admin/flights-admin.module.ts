import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsAdminRoutingModule } from './flights-admin-routing.module';
import { FlightsComponent } from './views/flights/flights.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsAdminRoutingModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class FlightsAdminModule { }
