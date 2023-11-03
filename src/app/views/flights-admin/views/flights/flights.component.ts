import { Component, OnInit } from '@angular/core';
import { FlightsServiceService } from "../../../../core/services/flights.service.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormModalFlightsComponent } from "../../components/form-modal-flights.component";


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
  providers: [MatSnackBar]
})

export class FlightsComponent implements OnInit {

  displayedColumns: any[] = [
    { key: 'actions', value: 'Reservar Viaje'},
    { key: 'origin', value: 'Ciudad Origen' },
    { key: 'destination', value: 'Ciudad Destino' },
    { key: 'departureTime', value: 'Fecha de Salida' },
    { key: 'arrivalTime', value: 'Fecha de Arrivo' },
    { key: 'price', value: 'Precio Ticket' },
    { key: 'isAvailable', value: 'Disponibilidad de Vuelo' },
  ];
  dataSource: any[] = [];

  constructor(
    private flightService: FlightsServiceService,
    private modalService: NgbModal,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.loadTableFlights();
  }

  getColumnKeys(): string[] {
    return this.displayedColumns.map((column) => column.key);
  }

  getColor(value: number): string {
    if (value === 0) {
      return 'red';
    } else {
      return 'green';
    }
  }

  loadTableFlights(): void {
    this.flightService.findAllFlights().subscribe((data) => {
      this.dataSource = data;
    });
  }


  openModal(element: any) {
    if (element.isAvailable === 1 ) {
      const componentRef = this.modalService.open(FormModalFlightsComponent, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        centered: true,
      });

      componentRef.componentInstance.data = element;

      componentRef.closed.subscribe(reason => {
        if (reason == 'success') {
          Swal.fire(
            'Buen Trabajo',
            'Su vuelo se ha reservado con éxito!',
            'success'
          );
          this.loadTableFlights();
        }
      });
    } else {
      Swal.fire(
        'Cancelado',
        'Mil disculpas vuelvo no disponible..!!',
        'error'
      );
    }



  }



}
