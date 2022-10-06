import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/Models/team';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {


  foundTm : Team = {} as Team;
  playerId : any;

  constructor(private tmService:TeamService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map) =>{
      this.playerId = map.get("id")
      this.tmService.getPlayer(parseInt(this.playerId)).subscribe((data :Team)=>{
        this.foundTm = data
      })
    })
  }

  onSubmit(){
    this.tmService.updatePlayer(this.foundTm).subscribe((data) =>{
      alert("Player Updated")
    })
  }

}
