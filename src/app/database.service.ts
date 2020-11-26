import { GeneratedFile } from '@angular/compiler';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { generate } from 'rxjs';
import { searchForm } from './models';

@Injectable()
export class database extends Dexie {

  private searchForm: Dexie.Table<searchForm, number>;

  constructor() {
    // database name
    super('anime')

    // setup the schema for v1
    this.version(1).stores({
      searchForm: "++id, q"
    })

    // get a reference to the todo collection
    this.searchForm = this.table('searchForm')
  }

  async addSearch(s: searchForm): Promise<any> {


    s.q = s.q.trim().toLowerCase()
    
    // select count(*) from searchForm where q = '...' and genre = '...'
    const resultCount = await this.searchForm
        .where('q').equals(s.q)
        .and(doc => doc.genre == s.genre)
        .count()

    if (resultCount <= 0) {
        return await this.searchForm.add(s)
    }

  }

  async getSearchOptions():Promise<searchForm[]> {
      
    
    return this.searchForm.orderBy('q').toArray()


  }

}