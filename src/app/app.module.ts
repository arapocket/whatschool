import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { CompaniesPage } from '../pages/companies/companies';
import { SchoolsPage } from "../pages/schools/schools";
import { SchoolPage } from "../pages/school/school";
import { CompanyPage } from "../pages/company/company";
import { SchoolsProvider } from '../providers/schools/schools';




@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SchoolsPage,
    CompaniesPage,
    SchoolPage,
    CompanyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SchoolsPage,
    CompaniesPage,
    SchoolPage,
    CompanyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SchoolsProvider,
    
  ]
})
export class AppModule {}
