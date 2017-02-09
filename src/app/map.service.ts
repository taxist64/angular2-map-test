import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class MapService {

  constructor(private http: Http) { }

  getEvents() {
    return this.http.get(`http://api.dev.aispot.no/lighthouse/spot/nearby?lat=59.879037&lng=59.87903`)
      .map((res:Response) => res.json());
  }

  getEventDetails(id) {
    return this.http.get('http://api.dev.aispot.no/lighthouse/content/'+id)
      .map((res:Response) => res.json());
  }
}
