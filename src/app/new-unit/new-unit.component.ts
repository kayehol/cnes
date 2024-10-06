import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-new-unit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
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

  onSubmit() {
    console.log(this.unitForm.value);
  }

}
