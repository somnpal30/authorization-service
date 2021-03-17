import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  @Input() label: string;
  @Input() dataCol: any[];
  @Output() selectedDataEvent = new EventEmitter<any>();

  selectedData: any;
  filterValue :string;

  constructor() {
    this.label = '';
    this.dataCol = [];
    this.filterValue =''
  }

  ngOnInit(): void {

  }

  displayData() {
    this.selectedDataEvent.emit(this.selectedData);
  }

}
