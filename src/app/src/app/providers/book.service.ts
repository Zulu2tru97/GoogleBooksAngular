import { Injectable } from '@angular/core';
import { Book } from '../model/book';
@Injectable({providedIn: 'root'})
export class BookService {
  constructor() { }

  getFavorite(): Book {return new Book();}

  getSearchResults(term: string): Book[]
  {
    let results: Book[] = [];

    for(let i = 0; i < 10; i++  )
    {
      let result = this.getFavorite();
      results.push(result);
    }

    return results;

  }
}