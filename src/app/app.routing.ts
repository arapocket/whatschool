import { Routes, RouterModule } from "@angular/router";

import { SchoolsComponent } from "./data/schools.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/schools', pathMatch: 'full' },
    { path: 'schools', component: SchoolsComponent }
    ];

export const routing = RouterModule.forRoot(APP_ROUTES);