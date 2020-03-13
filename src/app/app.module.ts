import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsDashboardComponent } from './collections-dashboard/collections-dashboard.component';
import { DashboardCardComponent } from './shared/components/dashboard-card/dashboard-card.component';
import { DetailsCardComponent } from './shared/components/details-card/details-card.component';
import { FurtherDetailedCardComponent } from './shared/components/further-detailed-card/further-detailed-card.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsDashboardComponent,
    DashboardCardComponent,
    DetailsCardComponent,
    FurtherDetailedCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
