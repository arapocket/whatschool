import { Component, OnInit } from '@angular/core';
import {NavParams} from "ionic-angular";
import { School } from "../../data/school.interface";



@Component({
  selector: 'page-school',
  templateUrl: 'school.html'
})
export class SchoolPage implements OnInit {

schoolGroup: { school: string, total: number, companies: School[]};  
constructor (private navParams: NavParams){}

ngOnInit(){
  this.schoolGroup = this.navParams.data;
}


}
