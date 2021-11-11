import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../providers/book.service';

@Component({
  selector: 'gb-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book = new Book();

 
  constructor(private bookService: BookService) { }

  ngOnInit(): void {this.book= this.bookService.getFavorite();}
  
  favorite(): void {console.log('favorite clicked');}
}
