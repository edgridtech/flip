import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public actionsheet = {
    open: false
  }
  public smallSheet = {
    open: false
  }
  constructor() { }
}
