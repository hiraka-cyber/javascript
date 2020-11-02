function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;

}

Book.prototype.getSummary = function(){
  return `${this.title} wa writeen by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype,getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

//Revise / Changes Year
Book.prototype.revise = function(newYear){
  this.year = newYear;
  this.revised = true;
}

const book1 = new Book('Book One','Jhin Doe','2020');
const book2 = new Book('Book Two','Jhon Doe','2021');

console.log(book2);
book2.revise('2018');
console.log('book2');
