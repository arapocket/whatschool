import { Component } from '@angular/core';
import { SchoolsPage } from "../schools/schools"
import { CompaniesPage } from "../companies/companies"


@Component({
  selector: 'page-tabs',
  template: 
  `

  <ion-tabs >
<ion-tab [root] = "schoolsPage" tabTitle = "Schools" tabIcon = "school" > </ion-tab>
<ion-tab [root] = "companiesPage"  tabTitle = "Companies" tabIcon = "cash"> </ion-tab>

</ion-tabs>
`

})

export class TabsPage {
  schoolsPage = SchoolsPage;
  companiesPage = CompaniesPage;
  

  }


