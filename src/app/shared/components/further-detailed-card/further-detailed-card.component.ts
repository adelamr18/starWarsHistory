import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-further-detailed-card",
  templateUrl: "./further-detailed-card.component.html",
  styleUrls: ["./further-detailed-card.component.css"]
})
export class FurtherDetailedCardComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: any;
  @Input() url: string = "";
  @Input() curruentIndex: number;
  @Output() onFurtherDetailsRequest = new EventEmitter();

  ngOnInit(): void {
    this.getFurtherDetailsData();
  }

  navigateToMoreDetails = () => {
    this.onFurtherDetailsRequest.emit(this.data);
  };

  getFurtherDetailsData = () => {
    this.http.get(this.url).subscribe(res => {
      this.data = res;
    });
  };
}
