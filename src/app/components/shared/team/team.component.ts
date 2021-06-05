import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamInfo = [
    {name: 'Eduarda Carboni', description: 'Texto', imageUrl: 'imageUrl'},
    {name: 'Kelly Barral', description: 'Texto', imageUrl: 'imageUrl'},

    {name: 'Karen Buck', description: 'Texto', imageUrl: 'imageUrl'},
    {name: 'Matheus Phelipe', description: 'Texto', imageUrl: 'imageUrl'},
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
