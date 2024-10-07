import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnitComponent } from './unit/unit.component';
import { NewUnitComponent } from './new-unit/new-unit.component';

export const routes: Routes = [
  {
    path: 'cnes/estabelecimentos',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'cnes/estabelecimentos/:codigo',
    title: 'Unidade',
    component: UnitComponent,
  },
  {
    path: 'cnes/nova-unidade',
    title: 'Nova unidade',
    component: NewUnitComponent,
  },
  {
    path: '',
    redirectTo: '/cnes/estabelecimentos',
    pathMatch: 'full',
  },
];
