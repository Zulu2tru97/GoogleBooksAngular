import { TestBed } from '@angular/core/testing';
import { Book } from '../model/book';
import { BookService } from './book.service';

describe('BookService', () => {
      let service: BookService;
      
      beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BookService);
      });

      it('should be created', () => {
        expect(service).toBeTruthy();
      });

      describe('getFavorite', () => {

        it('returns a book', () => {
          let result: Book = service.getFavorite();
          expect(result).toBeTruthy();
        });

      });

      describe('getSearchResults', () => {
        it('gets 10 books', () => {
          let results: Book[] = service.getSearchResults("Billy");
          expect(results.length).toEqual(10);
        })
      });
});