import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { NavbarComponent } from "./navbar.component";
import { Angular2SwapiService } from "angular2-swapi";
import { SwapiMockService } from "../../mocks/swapi-mock.service";
import { CollectionsServiceService } from "../../services/collections-service.service";
import { CollectionsMockService } from "../../mocks/collections-mock.service";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Angular2SwapiService, useClass: SwapiMockService },
        { provide: CollectionsServiceService, useClass: CollectionsMockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should expect to call setFilmsSubtitles when user navigates to title films  ", () => {
    const setFilmsSubtitles = spyOn(component, "setFilmsSubtitles");
    component.navigateToFilms();
    expect(setFilmsSubtitles).toHaveBeenCalled();
  });

  it(`should expect to set the collections service paramaters such as subTitleOne,subTitleTwo and subTitleThree with their correct texts imported from the defines
  file when setFilmsSubtitles is called
   `, inject([CollectionsServiceService], collectionsService => {
    component.setFilmsSubtitles();
    expect(collectionsService.subTitleOne).toEqual("Director");
    expect(collectionsService.subTitleTwo).toEqual("Produzenten");
    expect(collectionsService.subTitleThree).toEqual("Erscheinungsdatum");
  }));

  it(`should expect to set the collections service paramaters such as subTitleOne,subTitleTwo and subTitleThree with their correct texts imported from the defines
  file when setCharactersSubtitles is called
   `, inject([CollectionsServiceService], collectionsService => {
    component.setCharactersSubtitles();
    expect(collectionsService.subTitleOne).toEqual("Größe");
    expect(collectionsService.subTitleTwo).toEqual("Haarfarbe");
    expect(collectionsService.subTitleThree).toEqual("Geschlecht");
  }));

  it("should expect to call setCharactersSubtitles when user navigates to title characters  ", () => {
    const setCharactersSubtitles = spyOn(component, "setCharactersSubtitles");
    component.navigateToCharacters();
    expect(setCharactersSubtitles).toHaveBeenCalled();
  });

  it("should expect to call setPlanetsSubtitles when user navigates to title planets  ", () => {
    const setPlanetsSubtitles = spyOn(component, "setPlanetsSubtitles");
    component.navigateToPlanets();
    expect(setPlanetsSubtitles).toHaveBeenCalled();
  });

  it(`should expect to set the collections service paramaters such as subTitleOne,subTitleTwo and subTitleThree with their correct texts imported from the defines
  file when setPlanetsSubtitles is called
   `, inject([CollectionsServiceService], collectionsService => {
    component.setPlanetsSubtitles();
    expect(collectionsService.subTitleOne).toEqual("Umlaufzeit");
    expect(collectionsService.subTitleTwo).toEqual("Klima");
    expect(collectionsService.subTitleThree).toEqual("Schwere");
  }));
});
