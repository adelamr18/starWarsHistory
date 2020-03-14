import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CollectionsServiceService {
  genreType: string;
  subTitleOne: string;
  subTitleTwo: string;
  subTitleThree: string;
  cardDetailOne: string;
  cardDetailTwo: string;
  cardDetailThree: string;
  cardDetailFour: string;
  cardDetailFive: string;
  cardDetailSix: string;
  cardDetailSeven: string;
  cardDetailEight: string;
  cardDetailNine: string;
  currentlySelectedCard: Object;
  currenentDisplayedCards: any;
  showDashboardImage = false;
  id: number = 0;
  currentUrl: string = "";
  constructor() {}
}
