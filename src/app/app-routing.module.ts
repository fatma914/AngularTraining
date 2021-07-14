import { NgModule } from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';




const appRoutes: Routes = [
  {
    path: 'login',
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
