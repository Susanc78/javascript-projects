// Define your Book class here:

class Book {
  constructor(title, author, copyrightDate, ISBN, numPages) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.numPages = numPages;
    this.timesCheckedOut = 0;
    this.isDiscarded = false;
  }
  // Method to update the number of times the book has been checked out
  checkOut() {
    this.timesCheckedOut++;
  }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
  constructor(title, author, copyrightDate, ISBN, numPages) {
    // Call the parent class constructor to initialize properties
    super(title, author, copyrightDate, ISBN, numPages);
  }
  // Method to discard a manual if it is over 5 years old
  discard() {
    const currentYear = new Date().getFullYear();
    const bookAge = currentYear - this.copyrightDate;
    if (bookAge > 5) {
      this.isDiscarded = true;
    }
  }
}


class Novel extends Book {
  constructor(title, author, copyrightDate, ISBN, numPages) {
    // Call the parent class constructor to initialize properties
    super(title, author, copyrightDate, ISBN, numPages);
  }
  // Method to discard a novel if it has been checked out over 100 times
  discard() {
    if (this.timesCheckedOut > 100) {
      this.isDiscarded = true;
    }
  }
}


// Declare the objects for exercises 2 and 3 here:

let topSecret = new Manual("Top Secret Shuttle Building Manual", "redacted", 2013, 0000000000000, 1147);
let pride = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432,);

console.log(topSecret);
console.log(pride);

// Code exercises 4 & 5 here:

pride.checkOut();
pride.checkOut();
pride.checkOut();

console.log(pride.timesCheckedOut);

