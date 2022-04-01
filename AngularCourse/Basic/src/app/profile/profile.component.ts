import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = "Attila";
  age = 197;
  country = 'Ukraine';
  hobby = 'Computer games';
  games = ['CS 1.6', 'Dota2']
  bonusesByDefault = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
