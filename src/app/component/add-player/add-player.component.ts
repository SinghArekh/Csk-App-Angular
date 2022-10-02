import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/Models/team';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  tm : Team = {} as Team
  imageShow: any= '';
  file: any;
  constructor(private tmService : TeamService, private router: Router) { }

  ngOnInit(): void {
  }

  public addDataToDatabase()
  {
    this.tmService.addPlayer(this.tm).subscribe((data) =>{
    // this.router.navigate(["/Team/All"])
  })

  }

}