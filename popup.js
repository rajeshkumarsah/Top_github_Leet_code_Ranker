// Define a Book class
class Book {
  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.available = true;
  }

  // Method to borrow a book
  borrow() {
      if (this.available) {
          this.available = false;
          console.log(`You have borrowed "${this.title}" by ${this.author}.`);
      } else {
          console.log(`Sorry, "${this.title}" is currently not available.`);
      }
  }

  // Method to return a book
  returnBook() {
      if (!this.available) {
          this.available = true;
          console.log(`You have returned "${this.title}" by ${this.author}. Thank you!`);
      } else {
          console.log(`"${this.title}" is already available in the library.`);
      }
  }
}

// Create a Library class
class Library {
  constructor(name) {
      this.name = name;
      this.books = [];
  }

  // Add a book to the library
  addBook(book) {
      this.books.push(book);
      console.log(`"${book.title}" has been added to ${this.name}.`);
  }

  // List all available books
  listAvailableBooks() {
      console.log(`Available books in ${this.name}:`);
      this.books.forEach(book => {
          if (book.available) {
              console.log(`- ${book.title} by ${book.author}`);
          }
      });
  }
}

// Example usage
const library = new Library("My Library");

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-3-16-148410-0");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "978-3-16-148411-7");

library.addBook(book1);
library.addBook(book2);

library.listAvailableBooks();

book1.borrow();
book2.borrow();

library.listAvailableBooks();

book1.returnBook();
book2.returnBook();

library.listAvailableBooks();
