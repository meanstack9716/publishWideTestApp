import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EbookRoyaltyComponent } from './components/ebook-royalty/ebook-royalty.component';
import { PaperbackRoyaltyComponent } from './components/paperback-royalty/paperback-royalty.component';
import { AdSpendComponent } from './components/ad-spend/ad-spend.component';
import { AdImpressionsComponent } from './components/ad-impressions/ad-impressions.component';
import { AdClicksComponent } from './components/ad-clicks/ad-clicks.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EbookRoyaltyComponent,
    PaperbackRoyaltyComponent,
    AdSpendComponent,
    AdImpressionsComponent,
    AdClicksComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTabsModule,
    NgChartsModule
  ],
  providers: [
    DatePipe
  ]
})
export class DashboardModule { }
