import { Component } from '@angular/core';
import { Page } from '../../../../core/models/table.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  table: any = {
    column: [
      { name: 'Identificación', prop: 'document' },
      { name: 'Nombre', prop: 'fullName' },
      { name: 'Username', prop: 'username' },
      { name: 'Email', prop: 'email' },
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
