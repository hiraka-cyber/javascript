function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;

}

Book.prototype.getSummary = function(){
  return `${this.title} wa writeen by ${this.author} in ${this.year}`;
};

//Magazine Consrutctor
function Magazine(title,author,year,month){
  Book.call(this,title,author,year);

  this.month = month;
}

//inherit Prototype
Magazine.prototype = Object.create(Book.protoptype);

//instantiate magazine object
const mag1 = new Magazine('Mag One','Jhon Doe','2018','Jan');

// Use magazine
Magazine.prototype.constructor = Magazine;

console.log(mag1);
