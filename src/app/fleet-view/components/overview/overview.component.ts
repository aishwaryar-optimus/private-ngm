import { AuthService } from 'src/app/core/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  title = 'firstApp';
  iconUrl = 'http://www.developerdrive.com/wp-content/uploads/2013/08/ddrive.png';

  zoom = 8;

  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;

  markers: any[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ];
  constructor(
    public auth: AuthService,

  ) {
    this.auth.handleAuthentication();
  }

  ngOnInit(): void {
  }

}
