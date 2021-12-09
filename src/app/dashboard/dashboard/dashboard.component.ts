import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Chart } from 'src/app/core/models/charts.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  apiLoading: boolean = true;
  charts: Chart[] = [];
  ebookRoyalty: any = {
    labels: [],
    datasets: [
      [{'data': [], 'label': 'Ebook Royalty'}]
    ]
  };
  adClick: any = {
    labels: [],
    datasets: [
      [{'data': [], 'label': 'Ad Click'}]
    ]
  };
  adImpressions: any = {
    labels: [],
    datasets: [
      [{'data': [], 'label': 'Ad Impressions'}]
    ]
  };
  adSpend: any = {
    labels: [],
    datasets: [
      [{'data': [], 'label': 'Ad Spend'}]
    ]
  };
  paperbackRoyalty: any = {
    labels: [],
    datasets: [
      [{'data': [], 'label': 'Paperback Royalty'}]
    ]
  };
  constructor(
    private api: ApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getChartsData();
  }

  getChartsData(): void {
    this.api.get<Chart[]>()
      .subscribe(response => {
        const labels: any = []
        response.forEach(element => {
          labels.push(this.datePipe.transform(element.date,'yyyy-MM-dd'));
          this.ebookRoyalty.datasets[0][0].data.push(element.ebookRoyalty)
          this.adClick.datasets[0][0].data.push(element.adClick)
          this.adImpressions.datasets[0][0].data.push(element.adImpressions)
          this.adSpend.datasets[0][0].data.push(element.adSpend)
          this.paperbackRoyalty.datasets[0][0].data.push(element.paperbackRoyalty)
        });
        this.ebookRoyalty.labels = labels;
        this.adClick.labels = labels;
        this.adImpressions.labels = labels;
        this.adSpend.labels = labels;
        this.paperbackRoyalty.labels = labels;
        console.log(this.ebookRoyalty)
        this.apiLoading = false
      });
  }

}
