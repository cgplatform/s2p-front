import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/internal/internal.module').then(
        (m) => m.InternalModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/external/external.module').then(
        (m) => m.ExternalModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}