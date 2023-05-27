import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NgmaterialModule } from './ngmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractorsComponent } from './contractors/contractors.component';
import { ContractsComponent } from './contracts/contracts.component';
import { RevenuesummeryComponent } from './revenuesummery/revenuesummery.component';
import { AddContractComponent } from './contracts/add-contract/add-contract.component';
import { ContractDetailComponent } from './contracts/contract-detail/contract-detail.component';
import { MainComponent } from './contracts/contract-detail/main/main.component';
import { FilesComponent } from './contracts/contract-detail/files/files.component';
import { ContractVendorsTransHistoryComponent } from './contracts/contract-detail/contract-vendors-trans-history/contract-vendors-trans-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    EmptyRouteComponent,
    ContractorsComponent,
    ContractsComponent,
    RevenuesummeryComponent,
    AddContractComponent,
    ContractDetailComponent,
    MainComponent,
    FilesComponent,
    ContractVendorsTransHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgmaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
