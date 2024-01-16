import { Component } from '@angular/core';
import { NameInfoService } from '../services/name-info.service';
import { Gender } from '../interfaces/gender';
import { Age } from '../interfaces/age';
import { CountryFinal } from '../interfaces/country';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  labelValue: string = 'Unesite ime:';
  name: string = '';
  gender: Gender | null = null;
  age: Age | null = null;
  country: CountryFinal | null = null;
  isLoading: boolean = false;

  constructor(private nameInfoService: NameInfoService) {}

  onButtonClick() {
    this.isLoading = true;

    forkJoin([
      this.nameInfoService.getGenderByName(this.name),
      this.nameInfoService.getAgeByName(this.name),
      this.nameInfoService.getCountryByName(this.name),
    ]).subscribe((value: [Gender, Age, CountryFinal ]) => {
      this.age = value[1];
      this.country = value[2];
      this.gender = value[0];
      this.isLoading = false;
    });
  }
}
