import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './component/main.component';
import { SearchListComponent } from './component/search-list.component';
import { SearchComponent } from './component/search.component';
import { ResultsComponent } from './component/results.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { database } from './database.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'searchlist', component: SearchListComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:genre/:q', component: ResultsComponent },
//    { path: "**", redirectTo: '/', pathMatch: 'full' },
    ];

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchListComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LottieModule.forRoot({ player: playerFactory }),
     ReactiveFormsModule, FormsModule, BrowserAnimationsModule,
     HttpClientModule,
  ],
  providers: [database],
  bootstrap: [AppComponent]
})
export class AppModule { }
