import { Component, OnInit } from '@angular/core';
import {Data} from '../../data/data.interface'
import datas from '../../data/data'



@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class SchoolsPage implements OnInit {

dataCollection: {datas: Data[]}[];

ngOnInit() {
  this.dataCollection = datas;

}
}

