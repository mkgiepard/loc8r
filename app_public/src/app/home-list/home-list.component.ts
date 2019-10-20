import { Component, OnInit } from '@angular/core';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }
  locations: Location[] = [{
    _id: '5d6bfbb5e43a39116fb877d5',
    name: 'xStarsups',
    distance: 12114.6,
    address: 'x125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Power', 'WiFi']
  }, {
    _id: '5d6bfbb5e43a39116fb87123',
    name: 'xCosty',
    distance: 92114.6,
    address: 'x126 High Street, Reading, RG6 1PS',
    rating: 4,
    facilities: ['Hot drinks', 'Food', 'WiFi']
  }];

  ngOnInit() {
  }

}
