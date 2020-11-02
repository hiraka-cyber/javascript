function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function(){
    return `${this.title} wa writeen by ${this.author} in ${this.year}`;
  };
}

const book1 = new Book('Book One','Jhin Doe','2020');
const book2 = new Book('Book Two','Jhon Doe','2021');

console.log(book2);
