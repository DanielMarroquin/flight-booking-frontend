import { Component, OnInit } from '@angular/core';
import { ClientsService } from "../../../../core/services/clients.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  displayedColumns: any[] = [
    { key: 'firstName', value: 'Nombre Cliente' },
    { key: 'lastName', value: 'Apellido Cliente ' },
    { key: 'email', value: 'Correo Electronico' },
    { key: 'phoneNumber', value: 'Telefono Contacto' },
    { key: 'createdAt', value: 'Fecha Creacio' },

  ];

  dataSource: any[] = [];
  filteredData: any[] = [];

  constructor(
    private clients: ClientsService
  ) {}

  ngOnInit(): void {
    this.loadTableClients();
  }

  getColumnKeys(): string[] {
    return this.displayedColumns.map((column) => column.key);
  }
  loadTableClients(): void {
    this.clients.findAllClients().subscribe((data) => {
      this.dataSource = data;
    });
  }



}
