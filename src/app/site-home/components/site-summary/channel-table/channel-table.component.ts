import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-channel-table',
  templateUrl: './channel-table.component.html',
  styleUrls: ['./channel-table.component.scss']
})
export class ChannelTableComponent implements OnInit {
  channelData = [];
  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getChannelData();
  }

  //function for navigation to any route
  navigateTo(value) {
    if (value) {
      this.router.navigate([value], { relativeTo: this.activatedRoute });
    }
    return false;
  }

  //function to go back to previous route
  gotoPreviousPage() {
    this.location.back();
  }

  getChannelData() {
    for (let i = 0; i < 20; i++) {
      let obj = {
        channel_name: 1,
        description: 'NRG# class ' + i,
        type: 'Anemimeter',
        units: 'units' + i,
        serial: 234234,
        height: 100 * i,
        boom_bearing: 270.0 * i,
        scale: 771,
        offset: 0.23,
        mode: 'Statistics'
      };
      this.channelData.push(obj);
    }
  }
}
