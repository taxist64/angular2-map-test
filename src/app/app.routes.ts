import { Routes, RouterModule } from '@angular/router';
import { ExhibitionsMapComponent } from './exhibitions-map/exhibitions-map.component';
import { ExhibitionDetailsComponent } from './exhibition-details/exhibition-details.component';

export const routes: Routes = [
  { path: '', component: ExhibitionsMapComponent },
  { path: 'event-details/:id', component: ExhibitionDetailsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
