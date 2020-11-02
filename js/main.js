console.log(window);

alert(1);

//single elements
const form=document.getElementById('my-form');
console.log(document.querySelector('.container'));
console.log(document.querySelector('.h1'));
console.log(form);

//multi elements
console.log(document.querySelectorALL('.item'));
console.log(document.getElementByClassName('item'));
console.log(document.getElementByTagName('item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click',(e) =>{
  e.preventDefault();
  console.log(e.target.id);
  document.querySelector('"my-form"')
  .style.background = '#ccc' ;
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});

btn.addEventListener('mouseover',(e) =>{
  e.preventDefault();
  console.log(e.target.id);
  document.querySelector('"my-form"')
  .style.background = '#ccc' ;
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});

btn.addEventListener('mouseout',(e) =>{
  e.preventDefault();
  console.log(e.target.id);
  document.querySelector('"my-form"')
  .style.background = '#ccc' ;
  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit'.onSubmit);
function onSubmit(e){
  e.preventDefault();

  console.log(nameInput,value);
  if(nameInput.value === '' || emailInput.value === ''){
    masg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => ,sg.remove(),3000);
    alert('Please enter fields');
  }else{
    console.log('success');
    const li = document.createElement('li');
    li.appendChild(document.createTextNone(`${nameInput.value} : ${emailInput.value}`));

    userlist.appendChild(li);

    //Clear fields
    nameInput.value = '';
    emailInut.value = '';
  }
}
