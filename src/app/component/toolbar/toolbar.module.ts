import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ToolbarComponent} from "./toolbar.component";
import {ContactComponent} from "../contact/contact.component";
import {BackgroundImageComponent} from "../background-image/background-image.component";
import {TableComponent} from "../table/table.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild([
        {
          path: '', component: ToolbarComponent
        }
      ]
    ),
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    // IvyCarouselModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
  ],
  declarations: [ToolbarComponent ,
    ContactComponent,
    //CarrouselComponent,
    BackgroundImageComponent,
    TableComponent,
  ],
  providers: []
})

export class ToolbarModule {
}
