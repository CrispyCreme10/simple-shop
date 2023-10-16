import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';

export enum Theme {
  LIGHT_GREEN="light-green",
  LIGHT_GREEN__DARK="light-green--dark"
}

interface ThemeState {
  theme: Theme;
}

const DEFAULT_STATE: ThemeState = {
  theme: Theme.LIGHT_GREEN
}

@Injectable({
  providedIn: 'root'
})
export class ThemeStateService {

  private state$ = new BehaviorSubject(DEFAULT_STATE);

  theme$: Observable<Theme> = this.state$.pipe(
    map(state => state.theme),
    distinctUntilChanged(),
  );

  constructor() { }

  get snapshot() {
    return this.state$.getValue();
  }
  
  updateTheme(theme: Theme) {
    this.state$.next({
      ...this.snapshot,
      theme: theme
    })
  }
}
