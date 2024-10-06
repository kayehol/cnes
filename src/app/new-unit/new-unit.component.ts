import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { NgxMaskDirective } from 'ngx-mask';
import { NewUnitService } from './new-unit.service';
import { AddressDTO } from './address-dto.interface';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-new-unit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MenuComponent,
    NgxMaskDirective
  ],
  templateUrl: './new-unit.component.html',
  styleUrl: './new-unit.component.css'
})
export class NewUnitComponent {
  unitForm = new FormGroup({
    codigoCnes: new FormControl(''),
    nomeRazaoSocial: new FormControl(''),
    nomeFantasia: new FormControl(''),
    cnpj: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    codigoEstabelecimento: new FormControl(''),
    descricaoTurno: new FormControl(''),
    endereco: new FormControl(''),
    numero: new FormControl(''),
    bairro: new FormControl(''),
    municipio: new FormControl(''),
    uf: new FormControl(''),
    cep: new FormControl(''),
  });
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private newUnitService: NewUnitService,
    private snackBar: MatSnackBar
  ) { }

  save() {
    this.newUnitService.saveUnit(JSON.stringify(this.unitForm.value))
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => {
          this.snackBar.open('Você não possui autorização', 'Okay', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      });
  }

  getAddress() {
    const cep = this.unitForm.controls['cep'].value!;

    this.newUnitService.getAddress(cep)
      .subscribe((data: AddressDTO) => {
        this.unitForm.patchValue({
          cep: data.cep,
          endereco: data.logradouro,
          bairro: data.bairro,
          municipio: data.localidade,
          uf: data.uf
        });
      })
  }

}
