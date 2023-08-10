import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PrincipalInformationComponent } from '../principal-information/principal-information.component';
import { ReqInformationComponent } from '../req-information/req-information.component';
import { NeedHelpComponent } from '../need-help/need-help.component';
import { SearchCreditComponent } from '../search-credit/search-credit.component';
import { BusinessSupportComponent } from '../business-support/business-support.component';
import { AvailableZoneComponent } from '../available-zone/available-zone.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    PrincipalInformationComponent,
    ReqInformationComponent,
    NeedHelpComponent,
    SearchCreditComponent,
    BusinessSupportComponent,
    AvailableZoneComponent
  ]
})
export class HomePageModule { }
