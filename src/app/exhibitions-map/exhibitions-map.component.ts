import { Component, OnInit } from '@angular/core';
import { MapService } from "../map.service";
import { Router } from '@angular/router';

@Component({
  selector: 'exhibitions-map',
  templateUrl: './exhibitions-map.component.html',
  styleUrls: ['./exhibitions-map.component.css']
})
export class ExhibitionsMapComponent implements OnInit {
  lat: number = 59.879037;
  lng: number =  8.570257;
  zoom: number = 8;

  exhibitions = [];

  constructor(private mapService: MapService, private router: Router) {}

  ngOnInit() {
    this.getExhibitions();
  }

  getExhibitions() {
    this.mapService.getEvents().subscribe(
      events => this.exhibitions = events);
  }

  goToDetails(id) {
    console.log(id);
    this.router.navigate(['/event-details', id]);
  }
}
