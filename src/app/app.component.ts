import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  baris = 0;
  kolom = 0;
  kambing = 0;
  jumlah = 0;
  tulisanOPEN:String;
  no1 = "*";
  no2 = "*";
  no3 = "*";
  no4 = "*";
  no5 = "*";

  no6 = "*";
  no7 = "*";
  no8 = "*";
  no9 = "*";
  no10 = "*";

  no11 = "*";
  no12 = "*";
  no13 = "*";
  no14 = "*";
  no15 = "*";

  no16 = "*";
  no17 = "*";
  no18 = "*";
  no19 = "*";
  no20 = "*";

  no21 = "*";
  no22 = "*";
  no23 = "*";
  no24 = "*";
  no25 = "*";

  OPEN(){
    this.tulisanOPEN="TOKO DIBUKA";
    alert("DIBUKA");
  }
  inputs(){
    if (this.baris == 1) {
      this.kambing = 0;
    }
    if (this.baris == 2) {
      this.kambing = 5;
    }
    if (this.baris == 3) {
      this.kambing = 10;
    }
    if (this.baris == 4) {
      this.kambing = 15;
    }
    if (this.baris == 5) {
      this.kambing = 20;
    }

    this.jumlah = (this.kambing*1) + (this.kolom*1);
    alert(this.jumlah);
  }
}
