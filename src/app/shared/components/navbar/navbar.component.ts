import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CollectionsServiceService } from "../../services/collections-service.service";
import { Angular2SwapiService } from "angular2-swapi";
import { subTitles } from "../../constants/defines";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Output() onGenreChange = new EventEmitter();
  id: number;
  data: any;

  constructor(
    public collectionsService: CollectionsServiceService,
    private swapi: Angular2SwapiService
  ) {}

  ngOnInit(): void {
    this.setFilmsSubtitles();
  }

  navigateToFilms = () => {
    this.swapi.getFilms(1).subscribe(res => {
      res ? (this.data = res) : null;
      this.setFilmsSubtitles();
      this.onGenreChange.emit({
        curruentData: res,
        currentPath: "films"
      });
    });
    this.collectionsService.genreType = subTitles.films;
  };

  navigateToCharacters = () => {
    this.swapi.getPeople(1).subscribe(res => {
      res ? (this.data = res) : null;
      this.setCharactersSubtitles();
      this.onGenreChange.emit({
        curruentData: res,
        currentPath: "characters"
      });
    });
    this.collectionsService.genreType = subTitles.characters;
  };

  navigateToPlanets = () => {
    this.swapi.getPlanets(1).subscribe(res => {
      res ? (this.data = res) : null;
      this.setPlanetsSubtitles();
      this.onGenreChange.emit({
        curruentData: res,
        currentPath: "planets"
      });
    });
    this.collectionsService.genreType = subTitles.planets;
  };

  setFilmsSubtitles = () => {
    this.collectionsService.subTitleOne = subTitles.director;
    this.collectionsService.subTitleTwo = subTitles.producer;
    this.collectionsService.subTitleThree = subTitles.releaseDate;
  };

  setCharactersSubtitles = () => {
    this.collectionsService.subTitleOne = subTitles.actorHeight;
    this.collectionsService.subTitleTwo = subTitles.actorHairColor;
    this.collectionsService.subTitleThree = subTitles.actorGender;
  };

  setPlanetsSubtitles = () => {
    this.collectionsService.subTitleOne = subTitles.planetOrbitalPeriod;
    this.collectionsService.subTitleTwo = subTitles.planetClimate;
    this.collectionsService.subTitleThree = subTitles.planetGravity;
  };

  showDashboardImage = () => {
    this.collectionsService.showDashboardImage = true;
    this.onGenreChange.emit({
      curruentData: "",
      currentPath: ""
    });
  };
}
