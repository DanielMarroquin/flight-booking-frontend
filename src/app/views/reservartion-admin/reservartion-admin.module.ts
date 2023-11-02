import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservartionAdminRoutingModule } from './reservartion-admin-routing.module';
import { BookingComponent } from './views/booking/booking.component';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";


@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    ReservartionAdminRoutingModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,

  ]
})
export class ReservartionAdminModule { }
