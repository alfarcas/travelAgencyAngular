import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { UserComponent } from './user/user.component';
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ListOffersComponent } from './admin/offers/list-offers/list-offers.component';
import { PreviewOfferComponent } from './admin/offers/preview-offer/preview-offer.component';
import { AddEditDeleteOfferComponent } from './admin/offers/add-edit-delete-offer/add-edit-delete-offer.component';
import { AddEditDeleteDestinationComponent } from './admin/destinations/add-edit-delete-destination/add-edit-delete-destination.component';
import { PreviewDestinationComponent } from './admin/destinations/preview-destination/preview-destination.component';
import { ListDestinationsComponent } from './admin/destinations/list-destinations/list-destinations.component';
import { AddEditDeleteClientComponent } from './admin/clients/add-edit-delete-client/add-edit-delete-client.component';
import { ListClientsComponent } from './admin/clients/list-clients/list-clients.component';
import { PreviewClientComponent } from './admin/clients/preview-client/preview-client.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MyAccountComponent } from './my-account/my-account.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    ListOffersComponent,
    PreviewOfferComponent,
    AddEditDeleteOfferComponent,
    AddEditDeleteDestinationComponent,
    PreviewDestinationComponent,
    ListDestinationsComponent,
    AddEditDeleteClientComponent,
    ListClientsComponent,
    PreviewClientComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
