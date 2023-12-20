import { Component } from "@angular/core";
import { NameInfoService } from "../services/name-info.service";
import { Gender } from "../interfaces/gender";



@Component ({
    selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
    labelValue: string = 'Unesite ime:';
  name: string = '';
  gender: Gender | null = null ;

  constructor(private nameInfoService: NameInfoService) {}

  onButtonClick() {
    this.nameInfoService.getGenderByName(this.name).subscribe(gender=>{
      this.gender= gender});
  }

}




