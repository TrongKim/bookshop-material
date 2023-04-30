import { SubSink } from 'subsink';
import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/store/store.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
