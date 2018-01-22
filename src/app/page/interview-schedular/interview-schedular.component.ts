import { Alties } from './../alties/alties.component';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AltiService } from '../alti.service';

@Component({
  selector: 'app-interview-schedular',
  templateUrl: './interview-schedular.component.html',
  styleUrls: ['./interview-schedular.component.scss']
})
export class InterviewSchedularComponent implements OnInit {

  errorMessage: string;
  alties: Alties;
  hrid: string;
  date: string;
  type: string;
  constructor(private route: ActivatedRoute, private router: Router, private ownerService: AltiService) {
    this.alties = <Alties>{};
    this.hrid = '';
    this.date = '';
    this.type = '';
   }

  ngOnInit() {
    const ownerId = this.route.snapshot.params['id'];
    this.ownerService.getAltiesById(ownerId).subscribe(
      alties => this.alties = alties,
      error => this.errorMessage = <any> error);
  }
  schudule() {
    
  }

}
