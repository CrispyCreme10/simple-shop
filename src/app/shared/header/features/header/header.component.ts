import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCog, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ThemeStateService } from 'src/app/shared/services/theme-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    NgFor,
    FontAwesomeModule,
    RouterLink,
    NgClass,
    AsyncPipe
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {
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

  constructor(private themeState: ThemeStateService) {

  }

  ngOnInit(): void {
    
  }

  settingsDropdownToggle() {
    this.isSettingsDropdownOpen = !this.isSettingsDropdownOpen;
  }

  accountDropdownToggle() {
    this.isAccountDropdownOpen = !this.isAccountDropdownOpen;
  }
}
