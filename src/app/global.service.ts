import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public actionsheet = {
    open: false,
    selectedFlip: {}
  }
  public smallSheet = {
    open: false
  }
  constructor(
    public store: Store<AppState>
  ) { 
    setTimeout(() => {
      store.select('flips').subscribe(flips => {
        this.actionsheet.selectedFlip = flips.selectedFlip
      })
    }, 2000);
  }
}
