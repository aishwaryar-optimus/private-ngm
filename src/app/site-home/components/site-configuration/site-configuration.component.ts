import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-configuration',
  templateUrl: './site-configuration.component.html',
  styleUrls: ['./site-configuration.component.scss']
})
export class SiteConfigurationComponent implements OnInit {
  iconUrl = 'http://www.developerdrive.com/wp-content/uploads/2013/08/ddrive.png';
  zoom = 8;
  lat = 51.673858;
  lng = 7.815982;
  markers: any[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    }
  ];
  siteForm: FormGroup;
  submittedMsg: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
  ) {
    this.siteForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
        ]
      ],
      password: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submittedMsg = true
    if (this.siteForm.invalid) {
      return;
    }
    this._router.navigate(['/home'])
    console.log(this.siteForm.value)
  }

}
