import { Routes, RouterModule } from "@angular/router";

import { SchoolListComponent } from "../data/school-list.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/schools', pathMatch: 'full' },
    { path: 'schools', component: SchoolListComponent }
    ];

export const routing = RouterModule.forRoot(APP_ROUTES);