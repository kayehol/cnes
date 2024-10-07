import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { UnitService } from './unit.service';
import { Unit } from './unit.interface';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-unit',
  standalone: true,
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MenuComponent
  ],
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.css'
})
export class UnitComponent {
  loading: boolean = false;
  unit: Unit | undefined
  codigo!: string;

  private route = inject(ActivatedRoute);

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.codigo = params.get('codigo')!);
    this.loading = true;
    this.getUnit();
  }

  getUnit(): void {
    this.unitService.getUnit(this.codigo)
      .subscribe(data => {
        this.unit = data;
        this.loading = false;
      })
  }
}
