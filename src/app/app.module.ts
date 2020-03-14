import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CollectionsDashboardComponent } from "./collections-dashboard/collections-dashboard.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { DashboardCardComponent } from "./shared/components/dashboard-card/dashboard-card.component";
import { DetailsCardComponent } from "./shared/components/details-card/details-card.component";
import { FurtherDetailedCardComponent } from "./shared/components/further-detailed-card/further-detailed-card.component";
import { HttpClientModule } from "@angular/common/http";
import { Angular2SwapiModule } from "angular2-swapi";

@NgModule({
  declarations: [
    AppComponent,
    CollectionsDashboardComponent,
    NavbarComponent,
    DashboardCardComponent,
    DetailsCardComponent,
    FurtherDetailedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Angular2SwapiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
