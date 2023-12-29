import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from '../interfaces/gender';
import { environment } from 'src/environments/environment';
import { Age } from '../interfaces/age';
import { CountryFinal } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})

export class NameInfoService {

  private genderUrl = environment.genderApiUrl;
  private ageUrl = environment.ageApiUrl;
  private countryUrl = environment.countryApiUrl;

  constructor(private http: HttpClient) { }

  getGenderByName(name:string):Observable<Gender> {
    return this.http.get<Gender>(`${this.genderUrl}?name=${name}`);
  }

  getAgeByName(name:string):Observable<Age> {
    return this.http.get<Age>(`${this.ageUrl}?name=${name}`);
  }

  getCountryByName(name:string):Observable<CountryFinal> {
    return this.http.get<CountryFinal>(`${this.countryUrl}?name=${name}`);
  }

}
