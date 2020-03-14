import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollectionsDashboardComponent } from "./collections-dashboard/collections-dashboard.component";
import { DetailsCardComponent } from "./shared/components/details-card/details-card.component";
const routes: Routes = [
  { path: "", component: CollectionsDashboardComponent, pathMatch: "full" },
  { path: "**", redirectTo: "CollectionsDashboardComponent" },
  { path: "filmDetail/:id", component: DetailsCardComponent },
  { path: "characterDetail/:id", component: DetailsCardComponent },
  { path: "planetDetail/:id", component: DetailsCardComponent },
  { path: "characters", component: CollectionsDashboardComponent },
  { path: "films", component: CollectionsDashboardComponent },
  { path: "planets", component: CollectionsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
