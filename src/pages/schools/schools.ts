import { Component, OnInit } from '@angular/core';
import {School} from '../../data/school.interface'
import { SchoolPage } from "../school/school";
import { SchoolsProvider } from "../../providers/schools/schools";



@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html'
})
export class SchoolsPage  {



schools: any;
schoolPage = SchoolPage;

constructor(public schoolsService: SchoolsProvider){
}

ionViewDidLoad(){
  this.schoolsService.getSchools().then((data)=> {
    console.log(data);
    this.schools = data;
  }
  );
}


}

