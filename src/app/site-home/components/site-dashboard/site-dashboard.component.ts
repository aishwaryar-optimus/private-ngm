import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './site-dashboard.component.html',
  styleUrls: ['./site-dashboard.component.scss']
})
export class SiteDashboardComponent implements OnInit {

  siteData = []

  constructor() { }

  ngOnInit(): void {
    this.getSitesData()
  }

  getSitesData() {
    for (let i = 0; i < 30; i++) {
      let obj = {
        "project_name": "Project " + i,
        "site_name": "Site 0" + i,
        "instrumentation": "List of Instrumentation",
        "last_connection": new Date(),
        "active_events": "None",
        "battery": "90%",
        "location": "12.23, 123.32",
        "data": new Date(),
        "firmware": "No Updates"
      }
      this.siteData.push(obj)
    }
  }

}
