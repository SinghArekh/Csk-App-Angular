import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AllPlayerComponent } from './component/all-player/all-player.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule,Routes } from '@angular/router';
import { ViewPlayerComponent } from './component/view-player/view-player.component';
import { SearchPipe } from './Pipes/search.pipe';

const routes:Routes = [
  {path:"",redirectTo:"Home" ,pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"Team/All",component:AllPlayerComponent},
  {path:"Team/Add",component:AddPlayerComponent},
  {path:"Team/Edit/:id",component:EditPlayerComponent},
  {path:"Team/View/:id",component:ViewPlayerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    AllPlayerComponent,
    EditPlayerComponent,
    HomeComponent,
    NavBarComponent,
    ViewPlayerComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
