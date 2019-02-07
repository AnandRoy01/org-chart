import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IList } from '../shared/interface';
@Component({
  selector: 'app-maintask',
  templateUrl: './maintask.component.html',
  styleUrls: ['./maintask.component.css']
})
export class MaintaskComponent implements OnInit {
  panelOpenState = false;
  constructor(private dataService:DataService) { }
  mocklist: IList[] = [];
  ngOnInit() {
    this.dataService.getDetails().subscribe((molist: IList[]) => this.mocklist = molist);
  }

}

