import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearch = false;
  sideMenu: boolean = false;
  searchForm: FormGroup;
  showSearchDropdown: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.searchForm = this.formBuilder.group({
      search: ["", [Validators.required]]
    })
  }

  ngOnInit() { }

  search(code) {
    if ((code === 13 || code == undefined) && this.searchForm.valid) {
      console.log("navigate to search result")
    }
    this.showSearchDropdown = true;
  }

}
