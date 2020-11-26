import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-result',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  result = {} // API returns an object
  results =[]
  genre = '';
  q = '';
  canShare = false
 
  constructor(private activatedroute: ActivatedRoute, private http: HttpClient, router: Router, private webShare: NgNavigatorShareService) {

     }

    
  
  async ngOnInit(): Promise<void> {

    this.canShare = this.webShare.canShare()

    //extract params
     this.genre = this.activatedroute.snapshot.params['genre']  
     this.q = this.activatedroute.snapshot.params['q']
     
    //to append parameters 
     const params = new HttpParams()
     .set('q', this.q)

    this.result = await this.http.get('https://api.jikan.moe/v3/search/'+this.genre, { params: params }).toPromise()
    
    // to extract array from API result
    this.results = this.result['results']

  }

  shareThis(idx: number){
  
    const r = this.results[idx]
    this.webShare.share({
    title: r['title'],
    text: r['synopsis'],
    url: r['image_url']
  })
  }

}
