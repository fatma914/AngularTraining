import {NoPreloading, RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {TableComponent} from "./table/table.component";
import {NgModule} from "@angular/core";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {CarrouselComponent} from "./carrousel/carrousel.component";


const appRoutes: Routes = [
  {
    path: '',
    component: ToolbarComponent,
    children: [
      {path: '', component: CarrouselComponent},
      {path: 'carrousel', component: CarrouselComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'table', component: TableComponent}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes
    )
  ],
  exports: [RouterModule],
})
export class AppWebRoutingModule {
}
