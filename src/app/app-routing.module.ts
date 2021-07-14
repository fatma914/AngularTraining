import { NgModule } from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';
import {TableComponent} from "./component/table/table.component";
import {ContactComponent} from "./component/contact/contact.component";




const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./component/sign-in/sign-in.module').then(m => m.SignInModule),
  },
  {
    path: 'component',
    loadChildren: () => import('./component/toolbar/toolbar.module').then(m => m.ToolbarModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes
      , {preloadingStrategy: NoPreloading}
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
