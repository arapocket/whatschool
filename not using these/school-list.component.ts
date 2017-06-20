import { Component, OnInit } from "@angular/core";

import { School } from "./school.model";
import { SchoolService } from "./schools.service";

@Component({
    selector: 'app-school-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-school
                   [school]="school"
                    *ngFor="let school of schools"></app-school>
        </div>
    `
})
export class SchoolListComponent implements OnInit {
    schools: School[];

    constructor(private schoolService: SchoolService) {}

    ngOnInit() {
        this.schoolService.getSchools()
            .subscribe(
                (schools: School[]) => {
                    this.schools = schools;
                }
            );
    }
}