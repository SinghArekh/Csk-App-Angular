import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/Models/team';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {

  playerId : any;
  selected : Team = {} as Team;


  constructor(private tmService : TeamService , private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((map) =>{
      this.playerId= map.get("id");
      if (this.playerId !=null){
        this.tmService.getPlayer(parseInt(this.playerId)).subscribe((data)=>{
          this.selected = data as Team;
        })
      }
    })
  }

}