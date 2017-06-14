import { Component, OnInit } from '@angular/core';
import {School} from '../../data/school.interface'
import data from '../../data/data'



@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class SchoolsPage implements OnInit {

dataCollection: {school: string, total: number, companies: School[]}[];

ngOnInit() {
  this.dataCollection = data;

}
}

