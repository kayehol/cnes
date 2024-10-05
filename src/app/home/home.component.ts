import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'
import { HomeService } from './home.service';
import { Unit, UnitsDTO } from '../unit/unit.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  units: Unit[] | undefined;
  displayedColumns: string[] = [
    'codigo_cnes',
    'nome_razao_social',
    'nome_fantasia',
    'numero_cnpj',
    'detail'
  ];
  dataSource: any;
  loading: boolean = false;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUnits();
  }

  getUnits(): void {
    this.homeService.getUnits()
      .subscribe((data: UnitsDTO) => {
        this.units = data.estabelecimentos;
        this.dataSource = new MatTableDataSource(this.units);
        this.loading = false;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
