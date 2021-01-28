import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss']
})
export class SummaryTableComponent implements OnInit {
  summaryTableData = [];
  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSummaryTable();
  }

  //function for navigation to any route
  navigateTo(value) {
    if (value) {
      this.router.navigate([value], {
        relativeTo: this.activatedRoute,
        skipLocationChange: true
      });
    }
    return false;
  }

  //function to go back to previous route
  gotoSiteHomePage() {
    this.router.navigate(['../site-home'], { replaceUrl: true });
  }

  getSummaryTable() {
    for (let i = 0; i < 20; i++) {
      let obj = {
        channel_name: i + 1,
        description: 'NRG#' + i + 'H channel',
        longest_static_run: 'List of instrument',
        units: 'units' + i,
        min: 2.97,
        max: 0.35,
        avg: 11.825,
        total_meas: 1440,
        flag_qty: 0,
        flag_type: 'demo',
        availability: '100%'
      };
      this.summaryTableData.push(obj);
    }
  }
}
