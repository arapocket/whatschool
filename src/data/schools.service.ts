import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { School } from "./school.model";

@Injectable()
export class SchoolService {
    private schools: School[] = [];
    schoolIsEdit = new EventEmitter<School>();

    constructor(private http: Http) {}

    

    getSchools() {
        return this.http.get('http://localhost:3000/school')
            .map((response: Response) => {
                const schools = response.json().obj;
                let transformedSchools: School[] = [];
                for (let school of schools) {
                    transformedSchools.push(new School(school.school,
        school.schoolID,
        school.facebook,
        school.google,
        school.apple,
        school.amazon,
        school.microsoft,
        school.oracle,
        school.ibm,
        school.cisco,
        school.intel,
        school.hp,
        school.boeing,
        school.jpl,
        school.northrop,
        school.qualcomm,
        school.lockheed,
        school.raytheon,
        school.kaiser,
        school.sce,
        school.bloomberg,
        school.goldman,
        school.att,
        school.tesla,
        school.rollsroyce,
        school.ford,
        school.gm,
        school.ebay,
        school.salesforce,
        school.linkedin,
        school.vmware,
        school.nvidia,
        school.uber,
        school.slack,
        school.reddit,
        school.geaviation,
        school.delphi,
        school.workday,
        school.expedia));
                }
                this.schools = transformedSchools;
                return transformedSchools;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    
}