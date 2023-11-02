import { Component } from '@angular/core';
import { Page } from '../../../../core/models/table.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  table: any = {
    column: [
      { name: 'N.- Vuelo', prop: 'document' },
      { name: 'Asiento reservado', prop: 'fullName' },
      { name: 'Total Precio', prop: 'username' },
      { name: 'Hora de Reserva', prop: 'email' },
      { name: 'Cliente', prop: 'email' },
    ],
    rows: new Array<[]>(),
    isLoading: false,
  };

  tablePage = new Page();
  filter = {
    fullName: null
  };
  constructor() {
    this.tablePage.pageNumber = 0;
    this.tablePage.size = 10;
  }
}
