import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from "../../../core/services/booking.service";
import { ClientsService } from "../../../core/services/clients.service";


@Component({
  selector: 'app-form-modal-flights',
  template: `
    <div class="modal-header">
      <h2 class="modal-title" id="modal-title">Formulario reserva de vuelo</h2>
      <button
        type="button"
        class="close"
        aria-label="Close button"
        aria-describedby="modal-title"
        (click)="activeModal.dismiss('cancel')"
      >
        <span aria-hidden="true">x</span>
      </button>
    </div>

    <div class="modal-body">
      <div class="container">
        <div class="card p-4 mt-5">
          <form>
            <div class="row g-3">
              <div class="col-12 mb-2">
                <h4>Verifica los datos de tu vuelo</h4>
              </div>
              <div class="modal-body">
                  <div class="card mb-3">
                    <div class="card-body">
                      <p><strong>Ciudad Origen: </strong>{{ data.origin }}</p>
                      <p><strong>Ciudad Destino: </strong>{{ data.destination }}</p>
                      <p><strong>Fecha de Salida: </strong>{{ data.departureTime }}</p>
                      <p><strong>Fecha de Arrivo: </strong>{{ data.arrivalTime }}</p>
                      <p><strong>Precio Ticket: </strong>{{ data.price }}</p>
                    </div>
                  </div>
              </div>
              <span class="text-muted">Ingrese sus datos personales.</span>
              <form>
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="firstName" formControlName="firstName" required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label">Apellido</label>
                  <input type="text" class="form-control" id="lastName" formControlName="lastName" required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustomUsername" class="form-label">Celular</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">#</span>
                    <input type="text" class="form-control" id="phoneNumber" formControlName="phoneNumber"  aria-describedby="inputGroupPrepend" required>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input type="email" class="form-control" aria-label="Correo" aria-describedby="basic-addon2">
                  <span class="input-group-text" id="email" formControlName="email">@example.com</span>
                </div>
              </form>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss('cancel')">Cancelar</button>
      <button type="button" class="btn btn-primary" (click)="save()">Guardar</button>
    </div>

  `,
  providers: [ MatSnackBar ]

})
export class FormModalFlightsComponent implements OnInit {
  @Input() data: any;
  registerForm!: FormGroup;
  isSaving = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private booking: BookingService,
    private client: ClientsService,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      origin: [this.data.origin, Validators.required],
      destination: [this.data.destination, Validators.required],
      departureTime: [this.data.departureTime, Validators.required],
      arrivalTime: [this.data.arrivalTime, Validators.required],
      price: [this.data.price, Validators.required],
      isAvailable: [this.data.isAvailable, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
    console.log(this.registerForm)
  }

  save() {
    const data = this.registerForm
    console.log(data)
    const modelBooking = {
      flightId: data.value.id,
      seatsBooked: 112,
      totalPrice: data.value.price,
      reservationTime: data.value.departureTime,
      clientId: 3
    };

    const modelClient = {
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      phoneNumber: this.registerForm.get('phoneNumber')?.value,
    };

    const resultFn = {
      next: (result: any) => {
        this.activeModal.close('success');
        this.isSaving = false;
      },
      error: (err: any)=> {
        this.isSaving = false;
        this.alertError(err);
      }
    };

    if (modelBooking && modelClient){
      this.booking.createBooking(modelBooking).subscribe(resultFn);
      this.client.createClient(modelClient).subscribe(resultFn);
    }
    console.log(modelBooking);
  }


  private alertError(err: any) {
    this.snackBar.open(
      err.message || 'Error al cargar los datos ',
      `Error: ${err.code || 'no definido'}`,
      {
        duration: 4000,
        panelClass: 'snackbar-danger',
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
  }





}
