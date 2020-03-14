import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FurtherDetailedCardComponent } from "./further-detailed-card.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CollectionsServiceService } from "../../services/collections-service.service";
import { CollectionsMockService } from "../../mocks/collections-mock.service";
describe("FurtherDetailedCardComponent", () => {
  let component: FurtherDetailedCardComponent;
  let fixture: ComponentFixture<FurtherDetailedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FurtherDetailedCardComponent, NavbarComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: CollectionsServiceService, useClass: CollectionsMockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurtherDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should expect to invoke the function getFurtherDetailsData  when component excecutes  ngOnInit lifecycle hook  ", () => {
    const getFurtherDetailsData = spyOn(component, "getFurtherDetailsData");
    component.ngOnInit();
    expect(getFurtherDetailsData).toHaveBeenCalled();
  });
});
