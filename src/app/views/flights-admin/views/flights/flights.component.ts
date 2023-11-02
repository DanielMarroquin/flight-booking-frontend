import { Component, OnInit } from '@angular/core';
import { Page } from '../../../../core/models/table.model';
import { FlightsServiceService } from "../../../../core/services/flights.service.service";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})



export class FlightsComponent implements OnInit{

  table: any = {
    column: [
      { name: 'Origen', prop: 'document' },
      { name: 'Destino', prop: 'fullName' },
      { name: 'Hora de Salida', prop: 'username' },
      { name: 'Hora de Llegada', prop: 'email' },
      { name: 'Precio', prop: 'email' },
      { name: 'Disponibilidad', prop: 'email' },
    ],
    rows: new Array<[]>(),
    isLoading: false,
  }

  tableDate: any;

  rowHeight = 30;

  columnMode = 'flex';

  tablePage = new Page();
  filter = {
    fullName: null
  };
  constructor(
    private flightService: FlightsServiceService
  ) {
    this.tablePage.pageNumber = 0;
    this.tablePage.size = 10;
  }

  ngOnInit() {
    console.log(this.loadTableList());
  }



    loadTableList(): void {
    const page = 1; // Reemplaza esto con el número de página que desees cargar
    const pageSize = 10; // Reemplaza esto con el tamaño de página que desees cargar

    this.flightService.findAllFlights(page, pageSize).subscribe(
        (response) => {
          // Aquí puedes manejar la respuesta y asignar los datos a una variable que utilizarás en tu plantilla
          this.tableDate = response; // Asegúrate de tener una variable llamada tableData en tu componente
        },
        (error) => {
          // Maneja el error aquí
          console.error('Error fetching flights:', error);
        }
    );
  }


}
