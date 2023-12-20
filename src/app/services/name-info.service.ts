import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from '../interfaces/gender';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NameInfoService {

  private genderUrl = environment.genderApiUrl;

  constructor(private http: HttpClient) { }

  getGenderByName(name:string):Observable<Gender> {
    return this.http.get<Gender>(`${this.genderUrl}?name=${name}`);
  }
}
