import { Component, OnInit } from "@angular/core";
import { CollectionsServiceService } from "../shared/services/collections-service.service";
import { Router } from "@angular/router";
import { detailedCardSubtitles, subTitles } from "../shared/constants/defines";
import { Location } from "@angular/common";

@Component({
  selector: "app-collections-dashboard",
  templateUrl: "./collections-dashboard.component.html",
  styleUrls: ["./collections-dashboard.component.css"]
})
export class CollectionsDashboardComponent implements OnInit {
  constructor(
    public collectionsService: CollectionsServiceService,
    private router: Router,
    private location: Location
  ) {}
  collectionsData: any;
  clickedCardId: number = 0;

  ngOnInit(): void {
    this.checkUrlCurrentState();
  }

  onGenreChange(event) {
    event.curruentData
      ? this.displayDashboardData(event)
      : this.resetDashboard();
  }

  onInformationRequest = event => {
    let selectedCardId = this.collectionsService.id++;
    if (event.identifyCard === 1) {
      this.setFilmDetailsInfo(event.cardData);
      this.router.navigate(["/filmDetail", selectedCardId]);
    }
    if (event.identifyCard === 2) {
      this.setCharacterDetailsInfo(event.cardData);
      this.router.navigate(["/characterDetail", selectedCardId]);
    }
    if (event.identifyCard === 3) {
      this.setPlanetDetailsInfo(event.cardData);
      this.router.navigate(["/planetDetail", selectedCardId]);
    }
  };

  setFilmDetailsInfo = cardData => {
    this.collectionsService.currentlySelectedCard = cardData;
    this.collectionsService.cardDetailOne = detailedCardSubtitles.filmDetails;
    this.collectionsService.cardDetailTwo = subTitles.director;
    this.collectionsService.cardDetailThree = subTitles.producer;
    this.collectionsService.cardDetailFour = subTitles.releaseDate;
    this.collectionsService.cardDetailFive = detailedCardSubtitles.episode;
  };

  setCharacterDetailsInfo = cardData => {
    this.collectionsService.currentlySelectedCard = cardData;
    this.collectionsService.cardDetailOne = detailedCardSubtitles.actorDetails;
    this.collectionsService.cardDetailTwo = subTitles.actorHeight;
    this.collectionsService.cardDetailThree = detailedCardSubtitles.weight;
    this.collectionsService.cardDetailFour = subTitles.actorHairColor;
    this.collectionsService.cardDetailFive =
      detailedCardSubtitles.actorEyesColor;
    this.collectionsService.cardDetailSix =
      detailedCardSubtitles.actorBirthDate;
    this.collectionsService.cardDetailSeven = subTitles.actorGender;
    this.collectionsService.cardDetailEight =
      detailedCardSubtitles.actorHomePlanet;
  };

  setPlanetDetailsInfo = cardData => {
    this.collectionsService.currentlySelectedCard = cardData;
    this.collectionsService.cardDetailOne = detailedCardSubtitles.planetDetails;
    this.collectionsService.cardDetailTwo = detailedCardSubtitles.planetType;
    this.collectionsService.cardDetailThree =
      detailedCardSubtitles.planetRotationPeriod;
    this.collectionsService.cardDetailFour =
      detailedCardSubtitles.planetPopulation;
    this.collectionsService.cardDetailSix = detailedCardSubtitles.planetClimate;
  };

  resetDashboard = () => {
    this.collectionsData = null;
    this.collectionsService.currenentDisplayedCards = null;
    this.location.replaceState("");
  };

  displayDashboardData = event => {
    const currentData = event.curruentData;
    this.collectionsService.currenentDisplayedCards = currentData;
    this.collectionsData = currentData;
    this.location.replaceState(event.currentPath);
    this.collectionsService.showDashboardImage = false;
    this.collectionsService.currentUrl = event.currentPath;
  };

  checkUrlCurrentState = () => {
    this.collectionsService.currentUrl
      ? this.location.replaceState(this.collectionsService.currentUrl)
      : this.location.replaceState("");
  };
}
