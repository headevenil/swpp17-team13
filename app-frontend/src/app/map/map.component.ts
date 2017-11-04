import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title = 'app';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
