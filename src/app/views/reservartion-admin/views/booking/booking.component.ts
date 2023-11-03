import { Component, OnInit } from '@angular/core';
import { BookingService } from "../../../../core/services/booking.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  displayedColumns: any[] = [
    { key: 'flightId', value: 'Código de Vuelo' },
    { key: 'seatsBooked', value: 'Número de Asiento ' },
    { key: 'totalPrice', value: 'Costo Final Ticket' },
    { key: 'reservationTime', value: 'Fecha de Reserva' },
    { key: 'clientId', value: 'Número de Cliente' },

  ];

  dataSource: any[] = [];

  constructor(
    private booking: BookingService
  ) {
  }

  ngOnInit(): void {
    this.loadTableBooking();
  }

  getColumnKeys(): string[] {
    return this.displayedColumns.map((column) => column.key);
  }

  loadTableBooking(): void {
    this.booking.findAllBooking().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
