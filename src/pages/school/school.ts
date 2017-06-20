import { Component, OnInit } from '@angular/core';
import {NavParams} from "ionic-angular";
import { School } from "../../data/school.interface";



@Component({
  selector: 'page-school',
  templateUrl: 'school.html'
})
export class SchoolPage implements OnInit {

school: {
      schoolID?: string;
    school: string;
    facebook?: string;
    google?: string;
    apple?: string;
    amazon?: string;
    microsoft?: string;
    oracle?: string;
    ibm?: string;
    cisco?: string;
    intel?: string;
    hp?: string;
    boeing?: string;
    jpl?: string;
    northrop?: string;
    qualcomm?: string;
    lockheed?: string;
    raytheon?: string;
    kaiser?: string;
    sce?: string;
    bloomberg?: string;
    goldman?: string;
    att?: string;
    tesla?: string;
    rollsroyce?: string;
    ford?: string;
    gm?: string;
    ebay?: string;
    salesforce?: string;
    linkedin?: string;
    vmware?: string;
    nvidia?: string;
    uber?: string;
    slack?: string;
    reddit?: string;
    geaviation?: string;
    delphi?: string;
    workday?: string;
    expedia?: string; };  
constructor (private navParams: NavParams){}

ngOnInit(){
  this.school = this.navParams.data;
}


}
