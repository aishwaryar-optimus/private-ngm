import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearch = false;
  sideMenu = false;
  searchForm: FormGroup;
  showSearchDropdown = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  search(code): void {
    if ((code === 13 || code === undefined) && this.searchForm.valid) {
      console.log('navigate to search result');
    }
    this.showSearchDropdown = true;
  }

  logOut(): void {
    this.authService.logout();
  }

}
