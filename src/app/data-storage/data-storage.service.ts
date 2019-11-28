import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  country: any = {};
  
  constructor() { }
}
