import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {database} from '../database.service'
import { v4 as uuidv4 } from 'uuid'
import {searchForm} from '../models'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup

  constructor(private router:Router, private fb:FormBuilder, private searchDB: database) { }

  ngOnInit(): void {

    this.searchForm = this.fb.group({
    q: this.fb.control('', [Validators.required]),
    genre: this.fb.control('', [Validators.required]),
    })
  }

  backToSearchList(){
    this.router.navigate(['/searchlist'])
  }

  async save(){

    const search : searchForm = {
      q: this.searchForm.get('q').value,
      genre: this.searchForm.get('genre').value
    }

    console.info(search)

    await this.searchDB.addSearch(search)
  }

  // search directly from API
  gotoResults(){
    
    //route to results page with 2 params
    this.router.navigate(['/search',this.searchForm.value.genre, this.searchForm.value.q])

  }

}
