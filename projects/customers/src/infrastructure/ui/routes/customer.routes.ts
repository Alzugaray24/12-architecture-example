import { Routes } from '@angular/router';
// import { CustomerListComponent } from './components/customer-list/customer-list.component';
// import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
// import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
// import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
// import { CustomerDeleteComponent } from './components/customer-delete/customer-delete.component';
import { ListCustomersContainer } from '../containers/list-container';

export const customerRoutes: Routes = [
  {
    path: '',
    component: ListCustomersContainer,
  },
  // {
  //   path: 'create',
  //   component: CustomerCreateComponent, // Crear un nuevo cliente
  // },
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
