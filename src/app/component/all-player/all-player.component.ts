import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/Models/team';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-all-player',
  templateUrl: './all-player.component.html',
  styleUrls: ['./all-player.component.css']
})
export class AllPlayerComponent implements OnInit {

  plrId:any;
  plrList:Team[] = [];
  selected : Team = {} as Team;
  searchValue:string=""



  constructor(private tmService:TeamService , private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllTicketFromServer();
  }

  private getAllTicketFromServer()
  {
    this.tmService.getAllPlayer().subscribe((tkt:Team[]) => {
      this.plrList = tkt;
    })
  }
  public deleteTicketFromDatabase(id:number)
  {

        this.tmService.deletePlayer(id).subscribe((data)=>{
            alert("Deleted");
        })
  }

}