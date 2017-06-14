import { Component, OnInit } from '@angular/core';
import {School} from '../../data/data.interface'
import data from '../../data/data'



@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class SchoolsPage implements OnInit {

dataCollection: {schools: School[]}[];

ngOnInit() {
  this.dataCollection = data;

}
}

