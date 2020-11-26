import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { database } from '../database.service';
import { searchForm } from '../models';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  constructor(private router: Router, private animeDB: database) { }

  searches: searchForm[] = []

  async ngOnInit(): Promise<void> {
    this.searches = await this.animeDB.getSearchOptions()
  }

  toSearch(){
    this.router.navigate(['/search'])
  }

}
