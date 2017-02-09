import { Component, OnInit } from '@angular/core';
import { MapService } from "../map.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exhibition-details',
  templateUrl: './exhibition-details.component.html',
  styleUrls: ['./exhibition-details.component.css']
})
export class ExhibitionDetailsComponent implements OnInit {
  private id;
  private sub;
  details = {};

  constructor(private mapService: MapService, private router: Router, private route: ActivatedRoute) {}

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.mapService.getEventDetails(id).subscribe(
        eventDetails => this.details = eventDetails);
      console.log(this.id);
    });
  }

}
