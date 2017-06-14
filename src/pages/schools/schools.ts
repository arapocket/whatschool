import { Component, OnInit } from '@angular/core';
import {School} from '../../data/school.interface'
import data from '../../data/data'
import { SchoolPage } from "../school/school";



@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class SchoolsPage implements OnInit {

dataCollection: {school: string, total: number, companies: School[]}[];
schoolPage = SchoolPage;

ngOnInit() {
  this.dataCollection = data;

}
}

