import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from "./views/flights-admin/views/flights/flights.component";
import { HomeComponent } from "./views/dashboard/views/home/home.component";
import { BookingComponent } from "./views/reservartion-admin/views/booking/booking.component";
import { ClientsComponent } from "./views/clients-admin/views/clients/clients.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightsComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'clients', component: ClientsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
