import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CollectionsServiceService } from "../../services/collections-service.service";

@Component({
  selector: "app-dashboard-card",
  templateUrl: "./dashboard-card.component.html",
  styleUrls: ["./dashboard-card.component.css"]
})
export class DashboardCardComponent implements OnInit {
  @Input() collectionsData: any;
  @Input() curruentIndex: number;
  @Output() onInformationRequest = new EventEmitter();

  curruentFilmIndex: number;
  data: any;

  detailedCardIdentification = {
    films: 1,
    characters: 2,
    planets: 3
  };

  constructor(public collectionsService: CollectionsServiceService) {}

  ngOnInit(): void {
    this.collectionsData ? (this.data = this.collectionsData) : null;
    this.curruentFilmIndex = this.curruentIndex;
  }

  onMoreInformationRequest = () => {
    if (this.collectionsData["director"]) {
      this.onInformationRequest.emit({
        identifyCard: this.detailedCardIdentification.films,
        cardData: this.data
      });
    }
    if (this.collectionsData["gender"]) {
      this.onInformationRequest.emit({
        identifyCard: this.detailedCardIdentification.characters,
        cardData: this.data
      });
    }
    if (this.collectionsData["climate"]) {
      this.onInformationRequest.emit({
        identifyCard: this.detailedCardIdentification.planets,
        cardData: this.data
      });
    }
  };
}
