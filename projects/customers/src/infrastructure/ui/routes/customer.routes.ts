import { Routes } from '@angular/router';
import { ListCustomersContainer } from '../containers/list-container/list-container';
import { CreateContainerComponent } from '../containers/create-container/create-container';

export const customerRoutes: Routes = [
  {
    path: '',
    component: ListCustomersContainer,
  },
  {
    path: 'create',
    component: CreateContainerComponent, // Crear un nuevo cliente
  },
  // {
  //   path: 'edit/:id',
  //   component: CustomerEditComponent, // Editar un cliente existente
  // },
  // {
  //   path: 'delete/:id',
  //   component: CustomerDeleteComponent, // Eliminar un cliente existente
  // },
  // {
  //   path: ':id',
  //   component: CustomerDetailComponent, // Ver detalles de un cliente
  // },
];
