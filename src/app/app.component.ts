import { Component, Renderer2 } from '@angular/core';
import { ThemeStateService } from './shared/services/theme-state.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private render: Renderer2,
    private themeState: ThemeStateService
  ) {
    this.themeState.theme$
    .pipe(
      tap(theme => this.render.addClass(document.body, theme))
    )
    .subscribe();
  }
}

