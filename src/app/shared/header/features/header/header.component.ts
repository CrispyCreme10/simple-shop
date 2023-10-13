import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCog, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    NgFor,
    FontAwesomeModule,
    RouterLink
  ],
  standalone: true
})
export class HeaderComponent {
  categories: string[] = [
    'All',
    'Auto',
    'Gardening',
    'Home',
    'Pets',
    'Tools',
  ];
  isSettingsDropdownOpen: boolean = false;
  isAccountDropdownOpen: boolean = false;

  // icons
  faSearch = faSearch;
  faCog = faCog;
  faUser = faCircleUser;

  settingsDropdownToggle() {
    this.isSettingsDropdownOpen = !this.isSettingsDropdownOpen;
  }

  accountDropdownToggle() {
    this.isAccountDropdownOpen = !this.isAccountDropdownOpen;
  }
}
