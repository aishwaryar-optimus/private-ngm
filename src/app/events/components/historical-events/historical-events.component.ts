import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historical-events',
  templateUrl: './historical-events.component.html',
  styleUrls: ['./historical-events.component.scss']
})
export class HistoricalEventsComponent implements OnInit {
  selected = {};
  opens;
  drops;
  eventTableData = [];
  constructor() {
    this.selected['startDate'] = new Date();
    this.selected['endDate'] = new Date();
    this.opens = 'left';
    this.drops = 'down';
  }

  ngOnInit(): void {
    this.getEventsTable();
  }

  getEventsTable() {
    for (let i = 0; i < 20; i++) {
      let obj = {
        date_time: new Date(),
        project: 'Project A',
        site: 'Site 001',
        category: 'channel' + i + 1,
        details: 'Unexpected wind speed'
      };
      this.eventTableData.push(obj);
    }
  }

  datesUpdated(e) {
    console.log(e);
  }
}
