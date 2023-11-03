import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsAdminRoutingModule } from './flights-admin-routing.module';
import { FlightsComponent } from './views/flights/flights.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FormModalFlightsComponent } from './components/form-modal-flights.component';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    FlightsComponent,
    FormModalFlightsComponent
  ],
  imports: [
    CommonModule,
    FlightsAdminRoutingModule,
    NgxDatatableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FlightsAdminModule { }
