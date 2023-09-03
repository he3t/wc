import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kgValue: number = 0;
  lbValue: number = 0;
  gValue: number = 0;
  stonesValue: number = 0;
  ozValue: number = 0;

  convertToOtherUnits() {
    if (!isNaN(this.kgValue)) {
      this.lbValue = this.kgValue * 2.20462;
      this.gValue = this.kgValue * 1000;
      this.stonesValue = this.kgValue / 6.35029;
      this.ozValue = this.kgValue * 35.274;
    } else if (!isNaN(this.lbValue)) {
      this.kgValue = this.lbValue / 2.20462;
      this.gValue = this.lbValue * 453.592;
      this.stonesValue = this.lbValue / 14;
      this.ozValue = this.lbValue * 16;
    } else if (!isNaN(this.gValue)) {
      this.kgValue = this.gValue / 1000;
      this.lbValue = this.gValue / 453.592;
      this.stonesValue = this.gValue / 6350.29;
      this.ozValue = this.gValue * 0.035274;
    } else if (!isNaN(this.stonesValue)) {
      this.kgValue = this.stonesValue * 6.35029;
      this.lbValue = this.stonesValue * 14;
      this.gValue = this.stonesValue * 6350.29;
      this.ozValue = this.stonesValue * 224;
    } else if (!isNaN(this.ozValue)) {
      this.kgValue = this.ozValue / 35.274;
      this.lbValue = this.ozValue / 16;
      this.gValue = this.ozValue / 0.035274;
      this.stonesValue = this.ozValue / 224;
    } else {
      // If none of the input fields have valid input, reset all fields.
      this.kgValue = 0;
      this.lbValue = 0;
      this.gValue = 0;
      this.stonesValue = 0;
      this.ozValue = 0;
    }
  }
}
