import { Component } from "@angular/core";
import { NameInfoService } from "../services/name-info.service";
import { Gender } from "../interfaces/gender";
import { Age } from "../interfaces/age";
import { CountryFinal } from "../interfaces/country";



@Component ({
    selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
    labelValue: string = 'Unesite ime:';
  name: string = '';
  gender: Gender | null = null ;
  age: Age | null = null ;
  country: CountryFinal | null = null;

  constructor(private nameInfoService: NameInfoService) {}

  onButtonClick() {
    this.nameInfoService.getGenderByName(this.name).subscribe(gender=>{
      this.gender= gender});

    this.nameInfoService.getAgeByName(this.name).subscribe(age=>{
      this.age= age});

    this.nameInfoService.getCountryByName(this.name).subscribe(country=>{
      this.country = country;
    });
      }
  
  }
    




