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

        it('has a title for each book of "Search Result #"', () => {
          let results: Book[] = service.getSearchResults('billy');
          for(let i = 0; i < 10; i++) {
            expect(results[i].title).toBe('Search Result ' + i);
          }
        });

      });

      describe('getBooksToRead', () => {

        it('gets 3 books', () => {
          let results: Book[] = service.getBooksToRead("Billy");
          expect(results.length).toEqual(3);
        })

        it('has a title for each book of "To read #"', () => {
          let results: Book[] = service.getBooksToRead('billy');
          for(let i = 0; i < 3; i++) {
            expect(results[i].title).toBe('To Read ' + i);
          }
        });
        
      });
});