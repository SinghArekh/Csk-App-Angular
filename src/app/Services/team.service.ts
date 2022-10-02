import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../Models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  url:string = "http://localhost:51873/Team/All"
  constructor(private httpClient : HttpClient) { }

  public getAllPlayer() : Observable<Team[]>
  {
    return this.httpClient.get<Team[]>(this.url);
  }

  public getPlayer(id:Number) : Observable<Team>{
    const tempUrl = "http://localhost:51873/Team/" + id;
    return this.httpClient.get<Team>(tempUrl);
  }

  public updatePlayer(tm:Team):Observable<string>{
    const tempUrl = "http://localhost:51873/Team"
    return this.httpClient.put<string>(tempUrl,tm);
  }

  public addPlayer(tm:Team) : Observable<string>{
    const tempUrl = "http://localhost:51873/Team"
    return this.httpClient.post<string>(tempUrl,tm);
  }

  public deletePlayer(id:Number): Observable<string>{
    const tempUrl = "http://localhost:51873/Team/" + id ;
    return this.httpClient.delete<string>(tempUrl);
  }
}