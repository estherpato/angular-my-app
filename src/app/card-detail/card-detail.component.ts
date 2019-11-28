import { Component, OnInit, Input } from '@angular/core';
import { DataStorageService } from '../data-storage/data-storage.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  get name() { return this.dataStorageService.country.name }
  get id() { return this.dataStorageService.country.id }

  constructor(
    protected dataStorageService: DataStorageService,
  ) { }

  ngOnInit() {
  }

}
