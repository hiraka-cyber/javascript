// const s1 = 'Hello';
// console.log(typeof s1);
//
// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// alert(1);
// console.log(navigator.appVersion);

const book1 = {
  title: 'Book One',
  author: 'Jihn Doe',
  year: '2020'
  getSummary: function(){
    return `${this.title} wa writeen by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: 'Book Two',
  author: 'John Doe',
  year: '2021'
  getSummary: function(){
    return `${this.title} wa writeen by ${this.author} in ${this.year}`;
  }
};

// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));
