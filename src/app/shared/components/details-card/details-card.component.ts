import { Component, OnInit } from "@angular/core";
import { CollectionsServiceService } from "../../services/collections-service.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { detailedCardSubtitles, subTitles } from "../../constants/defines";

@Component({
  selector: "app-details-card",
  templateUrl: "./details-card.component.html",
  styleUrls: ["./details-card.component.css"]
})
export class DetailsCardComponent implements OnInit {
  constructor(
    public collectionService: CollectionsServiceService,
    private router: Router,
    private location: Location,
    private http: HttpClient
  ) {}
  cardDetail: any;
  detailedNames = [];
  data: any;
  homePlanet: any;

  ngOnInit(): void {
    this.getCardDetails();
  }

  onGenreChange = event => {
    this.collectionService.currenentDisplayedCards = event.curruentData;
    this.location.replaceState(event.currentPath);
    this.collectionService.currentUrl = event.currentPath;
    this.router.navigate([`/${event.currentPath}`]);
  };

  onFurtherDetailsRequest = event => {
    this.collectionService.currentlySelectedCard = event;
    event["name"] ? this.setCharacterFurtherDetails() : null;
    event["title"] ? this.setCharacterFurtherDetails() : null;
  };

  setCharacterFurtherDetails = () => {
    this.collectionService.cardDetailOne = detailedCardSubtitles.actorDetails;
    this.collectionService.cardDetailTwo = subTitles.actorHeight;
    this.collectionService.cardDetailThree = detailedCardSubtitles.weight;
    this.collectionService.cardDetailFour = subTitles.actorHairColor;
    this.collectionService.cardDetailFive =
      detailedCardSubtitles.actorEyesColor;
    this.collectionService.cardDetailSix = detailedCardSubtitles.actorBirthDate;
    this.collectionService.cardDetailSeven = subTitles.actorGender;
    this.collectionService.cardDetailEight =
      detailedCardSubtitles.actorHomePlanet;
    this.router.navigate(["/characterDetail", this.collectionService.id]);
  };

  setFilmFurtherDetails = () => {
    this.collectionService.cardDetailOne = detailedCardSubtitles.filmDetails;
    this.collectionService.cardDetailTwo = subTitles.director;
    this.collectionService.cardDetailThree = subTitles.producer;
    this.collectionService.cardDetailFour = subTitles.releaseDate;
    this.collectionService.cardDetailFive = detailedCardSubtitles.episode;
    this.router.navigate(["/filmDetail", this.collectionService.id]);
  };

  getCardDetails = () => {
    this.cardDetail = this.collectionService.currentlySelectedCard;
    if (this.cardDetail && this.cardDetail["homeworld"]) {
      this.http.get(this.cardDetail.homeworld).subscribe(res => {
        res ? (this.homePlanet = res) : null;
      });
    }
  };
}
