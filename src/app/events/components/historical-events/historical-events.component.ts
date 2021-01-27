import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historical-events',
  templateUrl: './historical-events.component.html',
  styleUrls: ['./historical-events.component.scss']
})
export class HistoricalEventsComponent implements OnInit {

  siteData = []

  constructor() { }

  ngOnInit(): void {
    this.getSitesData()
  }

  getSitesData() {
    for (let i = 0; i < 10; i++) {
      let obj = {
        "project_name": "Project " + i,
        "site_name": "Site 0" + i,
        "last_connection": new Date(),
        "category": "Channel" + i,
        'details': 'Unexpected wind speed'
      }
      this.siteData.push(obj)
    }
  }

}
