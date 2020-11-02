// Object Of Protos
const bookProtos = {
  getSummary: function(){
    return `${this.title} wa writeen by ${this.author} in ${this.year}`;
  },
  getAge: function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
}

// const book1 = Object.create(bookProtos);
// book1.title ='Book One';
// book1.author = 'Jhon Doe';
// book1.year = '2018';

const book1 =Object.create(bookProtos,{
  title: {value: 'Book One'},
  author: {value: 'Jhin Doe'},
  year: {value: '2019'}
});
